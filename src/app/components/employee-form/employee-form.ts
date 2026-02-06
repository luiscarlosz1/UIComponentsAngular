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
import { CURP_PATTERN, RFC_PATTERN, DATE_DDMMYYYY_PATTERN } from '../../shared/validation/validation.patterns';
import { EmployeeFormModel } from '../../models/employee-form.models';
import { FormField, FieldState, form, disabled } from '@angular/forms/signals';
import { emailField, minLen, patternField, requiredField } from '../../shared/validation/validation.factories';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FormField],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.scss'],
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
  formIsDisabled = signal(false);

  employeeForm = form(this.employeeFormModel, (schema) => {
    disabled(schema, () => this.formIsDisabled());

    requiredField('Names are required')(schema.names);
    requiredField('Last names are required')(schema.lastNames);
    requiredField('RFC is required')(schema.rfc);
    requiredField('CURP is required')(schema.curp);
    requiredField('Email is required')(schema.email);
    requiredField('Role is required')(schema.role);
    requiredField('Country is required')(schema.country);
    requiredField('Birth Date is required')(schema.birthDate);

    emailField()(schema.email);

    minLen(7, 'Phone number must be at least 7 characters')(schema.phone);
    minLen(13, 'RFC must be 13 characters')(schema.rfc);
    minLen(18, 'CURP must be 18 characters')(schema.curp);

    patternField(CURP_PATTERN, 'CURP format is invalid')(schema.curp);
    patternField(RFC_PATTERN, 'RFC format is invalid')(schema.rfc);
    patternField(DATE_DDMMYYYY_PATTERN, 'Start Date format is invalid')(schema.startDate);
    patternField(DATE_DDMMYYYY_PATTERN, 'Birth Date format is invalid')(schema.birthDate);
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

  onDeactivate() {
    this.formIsDisabled.update(v => !v);
  }

  onReset() {
    this.employeeForm().reset();
    this.employeeFormModel.set(this.emptyEmployeeFormModel);
  }
}