import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  };
}
