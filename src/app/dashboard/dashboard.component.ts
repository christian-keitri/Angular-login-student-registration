import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule]  
})
export class DashboardComponent {
  // Define errorMessage property
  errorMessage: string = '';

  studentName: string = '';
  studentEmail: string = '';
  selectedClassId: number | null = null;
  students: any[] = [];  // Example array for students
  classes: any[] = [];   // Example array for classes

  // Methods for adding, deleting, and enrolling students
  addStudent() {
    // Add logic here
  }

  deleteStudent(id: number) {
    // Add logic here
  }

  enrollStudent(id: number) {
    // Add logic here
  }
}
