import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule to use ngModel

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,  // Marking LoginComponent as a standalone component
  imports: [FormsModule]  // Import FormsModule for ngModel
})
export class LoginComponent {
  loginObj = {
    userName: '',
    password: ''
  };

  onLogin() {
    console.log(this.loginObj);  // Log the login object for now
  }
}
