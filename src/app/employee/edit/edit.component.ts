/**
 * @author -Ronak Patel.
 * @description -create calss for edit record to server.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// --------------------------------------------------------------------------------------------//
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // create for form
  public employeeForm: FormGroup;
  constructor(private service: EmployeeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadForm();
    this.getEmployee();
  }
  // craete for reactive form
  public loadForm(): void {
    this.employeeForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      designetation: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }
  // create for load data at edit time
  public loadDate(employee: Employee): void {
    this.employeeForm.patchValue({
      id: employee.id,
      name: employee.name,
      age: employee.age,
      designetation: employee.designetation,
      joiningDate: employee.joiningDate
    });
  }
  /**
   * @description this method craete for get data using id
   */
  public getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getEmployee(id).subscribe((employee: Employee) => { this.loadDate(employee); });
  }
  // craete for edited data
  public onSubmit(): void {
    this.service.updateEmployee(this.employeeForm.value).subscribe(() => { this.router.navigate(['employee/list']); });
  }
}
