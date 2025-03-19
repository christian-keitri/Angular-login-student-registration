import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  template: `<app-login></app-login>`,  // This will render the LoginComponent
  standalone: true,
  imports: [LoginComponent]  // Import LoginComponent as a standalone component
})
export class AppComponent {}
