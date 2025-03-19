import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Import AppComponent
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginComponent // Import the standalone LoginComponent here
  ],
  bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule {}
