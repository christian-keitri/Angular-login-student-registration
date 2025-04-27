import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost/api/';  // Your backend API URL

  constructor(private http: HttpClient) {}

  // Add student
  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}students`, student);
  }

  // Get all students
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}students`);
  }

  // Enroll student in a class
  enrollStudent(enrollmentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}enroll`, enrollmentData);
  }

  // Delete student
  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}students/${studentId}`);
  }
}
