/**
 * @author -Ronak Patel.
 * @description craete class for view data in server.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// -----------------------------------------------------------------------//
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // store data
  public employees: Employee[];
  // store keys
  public employeeKeys: any[];

  constructor(private service: EmployeeService, private router: Router) {
    this.employees = [];
    this.getEmployees();
  }

  ngOnInit() {
  }
  /**
   * @description this function call service and subscribe some data and store in employees
   */
  public getEmployees(): void {

    this.service.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.employeeKeys = ['id', 'name', 'age', 'designetation', 'joining_Date'];
    });
  }


  /**
   * @description delete data from server using id
   * @param id  store id
   */
  public deleteEmployee(id: number): void {
    this.service.deleteEmployee(id).subscribe(() => { this.getEmployees(); });
  }
  /**
   * @description this function redirect to edit component
   * @param id store id
   */
  public editEmployee(id: number): void {
    this.router.navigate(['employee/edit/' + id]);
  }

}
