// app.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from './employee-service.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showForm = false;
  employees!: Employee[];
  employeeForm!: FormGroup;
  editingId: number | null = null;

  constructor(private empService: EmployeeServiceService, private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.refreshEmployees();
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  private refreshEmployees(): void {
    this.empService.getEmployees().subscribe(response => this.employees = response);
  }

  addEmployee(): void {
    const newEmployee = this.employeeForm.value as Employee;
    this.empService.addEmployee(newEmployee).subscribe(() => {
      this.refreshEmployees();
      this.employeeForm.reset();
    });
  }

  editEmployee(employee: Employee): void {
    this.showForm = true; // Ajoutez cette ligne pour afficher le formulaire
  this.editingId = employee.id;
    this.editingId = employee.id;
    this.employeeForm.setValue({
      name: employee.name,
      status: employee.status,
      tel: employee.tel,
      email: employee.email
    });
  }

  updateEmployee(): void {
    const updatedEmployee = this.employeeForm.value as Employee;
    if (this.editingId !== null) {
      updatedEmployee.id = this.editingId;
    }
    this.empService.updateEmployee(updatedEmployee).subscribe(() => {
      this.refreshEmployees();
      this.cancelEdit();
    });
  }

  cancelEdit(): void {
    this.editingId = null;
    this.employeeForm.reset();
  }

  deleteEmployee(id: number): void {
    this.empService.deleteEmployee(id).subscribe(() => this.refreshEmployees());
  }
}
