/**
 * @author -Ronak Patel
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ------------------------------------------------------------------------------//
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
