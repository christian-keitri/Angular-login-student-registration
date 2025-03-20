import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Your LoginComponent
import { DashboardComponent } from './dashboard/dashboard.component';  // Your DashboardComponent

const routes: Routes = [
  { path: '', component: LoginComponent },  // Default route, login page
  { path: 'dashboard', component: DashboardComponent },  // Dashboard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
