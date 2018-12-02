/**
 * @author -Ronak Patel.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// -----------------------------------------------------------------------------//
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    // TableModule

  ],
  declarations: [AddComponent,
    EditComponent,
    ListComponent,
    TableComponent
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
