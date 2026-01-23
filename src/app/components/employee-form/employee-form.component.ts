import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, computed, model, effect, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CONTRACT_TYPE_OPTIONS,
  SHIFT_OPTIONS,
  COUNTRY_OPTIONS,
  ROLE_OPTIONS,
  NATIONALITY_OPTIONS,
  CITY_OPTIONS,
  BIRTH_DATE_TEXT_OPTIONS,
  START_DATE_TEXT_OPTIONS,
  AVAILABILITY_RANGE_TEXT_OPTIONS
} from './employee-form.constants';
import { EmployeeFormModel } from '../../models/employee-form.models';
import { email, Field, FieldState, form, minLength, pattern, required } from '@angular/forms/signals';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, Field],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeFormComponent {
  CONTRACT_TYPE_OPTIONS = CONTRACT_TYPE_OPTIONS;
  SHIFT_OPTIONS = SHIFT_OPTIONS;
  COUNTRY_OPTIONS = COUNTRY_OPTIONS;
  ROLE_OPTIONS = ROLE_OPTIONS;
  NATIONALITY_OPTIONS = NATIONALITY_OPTIONS;
  CITY_OPTIONS = CITY_OPTIONS;
  BIRTH_DATE_TEXT_OPTIONS = BIRTH_DATE_TEXT_OPTIONS;
  START_DATE_TEXT_OPTIONS = START_DATE_TEXT_OPTIONS;
  AVAILABILITY_RANGE_TEXT_OPTIONS = AVAILABILITY_RANGE_TEXT_OPTIONS;

  showFormData = signal(false);
  save = output<EmployeeFormModel>();
  formDataJson = computed(() => this.showFormData() ? JSON.stringify(this.employeeFormModel(), null, 2) : '');
  employee = model<EmployeeFormModel | null>(null);
  
  emptyEmployeeFormModel: EmployeeFormModel = {
    names: '',
    lastNames: '',
    curp: '',
    rfc: '',
    nationality: '',
    birthDate: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    contractType: '',
    role: '',
    startDate: '',
    availabilityRange: '',
    shift: '',
    medicalInsurance: false,
    remoteWork: false,
    bonus: false,
    comments: ''
  }

  employeeFormModel = signal<EmployeeFormModel>(this.emptyEmployeeFormModel);

  employeeForm = form(this.employeeFormModel, (schema) => {
    required(schema.names, { message: 'Names are required' });
    required(schema.lastNames, { message: 'Last names are required' });
    required(schema.rfc, { message: 'RFC is required' });
    required(schema.curp, { message: 'CURP is required' });
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Email format is invalid' });
    minLength(schema.phone, 7, { message: 'Phone number must be at least 7 characters long' });
    minLength(schema.rfc, 13, { message: 'RFC must be 13 characters long' });
    minLength(schema.curp, 18, { message: 'CURP must be 18 characters long' });
    pattern(schema.curp, /^[A-Z]{4}\d{6}[HM][A-Z]{5}\d{2}$/, { message: 'CURP format is invalid' });
    pattern(schema.rfc, /^[A-Z]{4}\d{6}[A-Z0-9]{3}$/, { message: 'RFC format is invalid' });
  });

  private syncEffect = effect(() => {
    const employee = this.employee();

    if (employee) {
      this.employeeFormModel.set({ ...employee });
      this.employeeForm().reset();
    } else {
      this.employeeFormModel.set(this.emptyEmployeeFormModel);
      this.employeeForm().reset();
    }
  });

  getExternalError(field: FieldState<any>): string | undefined {
    if (!field.invalid()) return;

    const errors = field.errors();
    if (!errors.length) return;

    const onlyRequired = errors[0].kind === 'required';
    if (onlyRequired && !field.touched()) return;
    return errors[0].message;
  }

  onViewData() {
    this.showFormData.update(value => !value);
  }

  onViewFormState() {
    Object.entries(this.employeeForm).forEach(([key, value]) => {
      if (typeof value === 'function') {
        const state = value();
        if ('valid' in state) {
          console.log(key, {
            valid: state.valid(),
            invalid: state.invalid(),
            touched: state.touched(),
            dirty: state.dirty(),
            errors: state.errors()
          });
        }
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const payload = this.employeeFormModel();
    console.log('Signal form payload:', payload);
    this.save.emit(this.employeeFormModel());
  }

  onSetValues() {
    this.employeeFormModel.update(v => ({
      ...v,
      names: 'Juan',
      lastNames: 'Pérez Gómez',
      curp: 'PEGA800101HDFRZN09',
      rfc: 'PEGA800101XXX',
      nationality: 'mexican',
      birthDate: '01/01/1994',
      email: 'juan.perez@example.com',
      phone: '5551234567',
      country: 'mx',
      city: 'cdmx',
      contractType: 'part_time',
      role: 'qa',
      startDate: '01/01/2024',
      availabilityRange: '01/01/2024|31/12/2024',
      shift: 'night',
      medicalInsurance: true,
      remoteWork: true,
      bonus: true,
      comments: 'Empleado de ejemplo'
    }));
  }

  onSetIncorrectValues() {
    this.employeeFormModel.update(v => ({
      ...v,
      curp: 'INVALIDCURP',
      rfc: 'SHORT',
      email: 'invalidEmailFormat',
      phone: '2123',
      birthDate: '1990-01-01',
      startDate: '2024-01-01',
    }));
  }

  onReset() {
    this.employeeForm().reset();
    this.employeeFormModel.set(this.emptyEmployeeFormModel);
    this.showFormData.set(false);
  }
}