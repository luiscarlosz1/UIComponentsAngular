import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, signal, computed } from '@angular/core';
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
  styleUrls: ['./employee-table.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeTableComponent {
  @Input() employees: EmployeeFormModel[] = [];
  filter = signal('');

  employeeHeaders: UiTableHeader[] = [
    { field: 'names', text: 'Nombres' },
    { field: 'lastNames', text: 'Apellidos' },
    { field: 'email', text: 'Correo electrónico' },
    { field: 'role', text: 'Rol' },
    { field: 'country', text: 'País' },
    { field: 'city', text: 'Ciudad' },
    { field: 'contractType', text: 'Tipo de contrato' },
    { field: 'shift', text: 'Turno' },
    { field: 'medicalInsurance', text: 'Seguro médico' },
    { field: 'remoteWork', text: 'Trabajo remoto' },
    { field: 'bonus', text: 'Bonificaciones' },
    { field: 'startDate', text: 'Fecha de ingreso' },
    { field: 'birthDate', text: 'Fecha de nacimiento' },
    { field: 'availabilityRange', text: 'Disponibilidad' },
    { field: 'comments', text: 'Observaciones' }
  ];
}
