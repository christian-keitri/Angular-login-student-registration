import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel binding
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor

// Import standalone components
import { AppComponent } from './app.component'; // Standalone component
import { DashboardComponent } from './dashboard/dashboard.component'; // Standalone component

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,  // Import FormsModule to use ngModel
    CommonModule, // Import CommonModule to use directives like ngIf
  ],
  providers: [],
  // Standalone components should not be in the declarations or bootstrap arrays here.
  bootstrap: [AppComponent] // Bootstrap the standalone AppComponent
})
export class AppModule { }
