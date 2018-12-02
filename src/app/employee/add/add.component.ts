/**
 * @author Ronak Patel.
 * @description craete class for add data to server.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ---------------------------------------------------------------------------------------------------//
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // create for form
  public employeeForm: FormGroup;
  constructor(private service: EmployeeService,
    private fb: FormBuilder,
    private route: Router) { }

  ngOnInit() {
    this.loadForm();
  }
  // craete for reactive form
  public loadForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      designetation: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }
  // craete for edited data
  public onSubmit(): void {
    this.service.addEmployee(this.employeeForm.value).subscribe(() => { this.route.navigate(['employee/list']); });
  }
}
