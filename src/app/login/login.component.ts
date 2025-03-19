import { CommonModule } from '@angular/common'; // Import CommonModule
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Add both FormsModule and CommonModule to imports
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
