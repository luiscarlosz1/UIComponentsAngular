import { Component, CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormModel } from '../../models/employee-form.models';
import { UiTableHeader } from '@luiscarlosz1/stencil-library';
import {
  CONTRACT_TYPE_OPTIONS,
  SHIFT_OPTIONS,
  COUNTRY_OPTIONS,
  ROLE_OPTIONS,
  CITY_OPTIONS
} from '../employee-form/employee-form.constants';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeTableComponent {
  employees = input<EmployeeFormModel[]>([]);
  edit = output<EmployeeFormModel>();
  delete = output<string>();

  employeeHeaders: UiTableHeader[] = [
    { field: 'fullName', text: 'Full Name', width: '200px' },
    { field: 'role', text: 'Role', width: '150px' },
    { field: 'email', text: 'Email' },
    { field: 'country', text: 'Country'},
    { field: 'city', text: 'City' },
    { field: 'contractType', text: 'Contract Type' },
    { field: 'shift', text: 'Shift' },
    { field: 'medicalInsurance', text: 'Medical Insurance' },
    { field: 'remoteWork', text: 'Remote Work' },
    { field: 'bonus', text: 'Bonus' },
    { field: 'startDate', text: 'Start Date'},
    { field: 'birthDate', text: 'Birth Date'},
    { field: 'availabilityRange', text: 'Availability' },
    { field: 'comments', text: 'Comments' },
    { field: 'actions', text: 'Actions', width: '200px' }
  ];

  cellTemplates = {
    fullName: (_: any, row: EmployeeFormModel) => `${row.names} ${row.lastNames}`,
    role: (_: any, row: EmployeeFormModel) => this.getTextFromOptions(row.role, ROLE_OPTIONS),
    country: (_: any, row: EmployeeFormModel) => this.getTextFromOptions(row.country, COUNTRY_OPTIONS),
    city: (_: any, row: EmployeeFormModel) => this.getTextFromOptions(row.city, CITY_OPTIONS),
    contractType: (_: any, row: EmployeeFormModel) => this.getTextFromOptions(row.contractType, CONTRACT_TYPE_OPTIONS),
    shift: (_: any, row: EmployeeFormModel) => this.getTextFromOptions(row.shift, SHIFT_OPTIONS),
    medicalInsurance: (_: any, row: EmployeeFormModel) => row.medicalInsurance ? 'Yes' : 'No',
    remoteWork: (_: any, row: EmployeeFormModel) => row.remoteWork ? 'Yes' : 'No',
    bonus: (_: any, row: EmployeeFormModel) => row.bonus ? 'Yes' : 'No',
    actions: (_: any, row: EmployeeFormModel) => {
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.gap = '8px';

      const btnEdit = document.createElement('ui-button');
      btnEdit.label = 'Edit';
      btnEdit.addEventListener('buttonClick', () => this.onEdit(row));

      const btnDelete = document.createElement('ui-button');
      btnDelete.label = 'Delete';
      btnDelete.color = 'secondary';
      btnDelete.addEventListener('buttonClick', () => this.onDelete(row));

      container.appendChild(btnEdit);
      container.appendChild(btnDelete);
      return container;
    }
  };

  onEdit(row: EmployeeFormModel) {
    this.edit.emit(row);
  }

  onDelete(row: EmployeeFormModel) {
    this.delete.emit(row.curp);
  }

  private getTextFromOptions(value: string, options: { value: string; text: string }[]): string {
    return options.find(opt => opt.value === value)?.text || value;
  }
}
