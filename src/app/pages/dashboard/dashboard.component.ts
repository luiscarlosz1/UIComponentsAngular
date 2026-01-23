import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';
import { EmployeeFormModel } from '../../models/employee-form.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [HeaderComponent, EmployeeFormComponent, EmployeeTableComponent]
})
export class DashboardComponent {
  selectedEmployee = signal<EmployeeFormModel | null>(null);
  employees = signal<EmployeeFormModel[]>([
    {
      id: 1,
      names: 'Juan',
      lastNames: 'Pérez',
      curp: 'JUAP800101HDFRRN09',
      rfc: 'JUAP800101ABC',
      nationality: 'mexican',
      birthDate: '1980-01-01',
      email: 'juan.perez@email.com',
      phone: '5551234567',
      country: 'mx',
      city: 'cdmx',
      contractType: 'full_time',
      role: 'developer',
      startDate: '2022-01-10',
      availabilityRange: '2025-01-01|2025-12-31',
      shift: 'day',
      medicalInsurance: true,
      remoteWork: false,
      bonus: true,
      comments: 'Empleado destacado.'
    },
    {
      id: 2,
      names: 'Ana',
      lastNames: 'García',
      curp: 'AANG900202MDFRRL05',
      rfc: 'AANG900202DEF',
      nationality: 'colombian',
      birthDate: '1990-02-02',
      email: 'ana.garcia@email.com',
      phone: '5559876543',
      country: 'co',
      city: 'medellin',
      contractType: 'part_time',
      role: 'designer',
      startDate: '2023-03-15',
      availabilityRange: '2025-06-01|2025-12-01',
      shift: 'night',
      medicalInsurance: false,
      remoteWork: true,
      bonus: false,
      comments: ''
    }
  ]);

  onEdit(employee: EmployeeFormModel) {
    this.selectedEmployee.set(employee);
  }

  onSave(employee: EmployeeFormModel) {
    this.employees.update(emps => {

      // EDIT
      if (employee.id != null) return emps.map(e => e.id === employee.id ? { ...employee } : e);
      // CREATE
      const nextId = emps.length > 0 ? Math.max(...emps.map(e => e.id ?? 0)) + 1 : 1;

      return [...emps, { ...employee, id: nextId }];
    });

    this.selectedEmployee.set(null);
  }

  onDelete(curp: string) {
    this.employees.update(emps => emps.filter(e => e.curp !== curp));
  }
}