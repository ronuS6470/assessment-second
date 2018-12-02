/**
 * @author -Ronak Patel.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// ------------------------------------------------------------------------------------------//
import { environment } from '../../environments/environment';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  // store base url.
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
/**
 * @description to get data from server and pass to component.
 * @returns Observable.
 */
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }
  /**
   * @description to get data from server using id and pass to component.
   * @param id to get id from component.
   * @returns Observable.
   */
  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/' + id);
  }
  /**
   * @description to add data from component to server.
   * @param employee to store data.
   * @returns Observable.
   */
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }
  /**
   * @description to delete data from server using id.
   * @param id to get id from component.
   * @returns Observable.
   */
  public deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl + '/' + id);
  }
  /**
   * @description to update data from server using id
   * @param employee to store data
   * @returns Observable
   */
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + '/' + employee.id, employee);
  }

}
