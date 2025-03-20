import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel
import { CommonModule } from '@angular/common'; // For CommonModule (ngIf, ngFor)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  // Link the template
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Add CommonModule and FormsModule here
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: ''
  };

  errorMessage: string = ''; // Declare errorMessage property

  onLogin() {
    console.log('Logging in with:', this.loginObj);
    // Example logic for login
    if (!this.loginObj.userName || !this.loginObj.password) {
      this.errorMessage = 'Please fill in all fields'; // Set an error message
    } else {
      this.errorMessage = '';  // Clear error message if fields are valid
      // Proceed with login logic here
    }
  }
}

