import { Component, CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormModel } from '../../models/employee-form.models';
import { UiTableHeader } from 'stencil-library';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeTableComponent {
  employees = input<EmployeeFormModel[]>([]);
  edit = output<EmployeeFormModel>();
  delete = output<string>();

  employeeHeaders: UiTableHeader[] = [
    { field: 'names', text: 'First Name', width: '170px' },
    { field: 'lastNames', text: 'Last Name', width: '170px' },
    { field: 'email', text: 'Email', width: '170px' },
    { field: 'role', text: 'Role', width: '170px' },
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
    { field: 'comments', text: 'Comments' },
    { field: 'actions', text: 'Actions', width: '200px' }
  ];

  onEdit(row: EmployeeFormModel) {
    this.edit.emit(row);
  }

  onDelete(row: EmployeeFormModel) {
    this.delete.emit(row.curp);
  }

  actionCellTemplate = (_: any, row: EmployeeFormModel) => {
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
  };
}
