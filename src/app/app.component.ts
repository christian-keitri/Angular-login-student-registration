import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; // Correct import for LoginComponent

@Component({
  selector: 'app-root',
  template: `<app-login></app-login>`,  // Using the app-login selector here
  standalone: true,  // Marking AppComponent as a standalone component
  imports: [LoginComponent]  // Importing LoginComponent in AppComponent
})
export class AppComponent {}
