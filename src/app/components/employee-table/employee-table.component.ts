import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormModel } from '../../models/employee-form.models';

export interface UiTableHeader {
  field: string;
  text: string;
}

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeTableComponent {
  @Input() employees: EmployeeFormModel[] = [];
  filter = signal('');

  employeeHeaders: UiTableHeader[] = [
    { field: 'names', text: 'First Name' },
    { field: 'lastNames', text: 'Last Name' },
    { field: 'email', text: 'Email' },
    { field: 'role', text: 'Role' },
    { field: 'country', text: 'Country' },
    { field: 'city', text: 'City' },
    { field: 'contractType', text: 'Contract Type' },
    { field: 'shift', text: 'Shift' },
    { field: 'medicalInsurance', text: 'Medical Insurance' },
    { field: 'remoteWork', text: 'Remote Work' },
    { field: 'bonus', text: 'Bonus' },
    { field: 'startDate', text: 'Start Date' },
    { field: 'birthDate', text: 'Birth Date' },
    { field: 'availabilityRange', text: 'Availability' },
    { field: 'comments', text: 'Comments' }
  ];
}
