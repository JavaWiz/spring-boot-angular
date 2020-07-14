import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student/student';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public getStudents() {
    return this.httpClient.get<Student[]>('http://localhost:8080/students');
  }

  public deleteStudent(student) {
    return this.httpClient.delete<Student>("http://localhost:8080/student/" + student.id);
  }

  public createStudent(student) {
    return this.httpClient.post<Student>("http://localhost:8080/student", student);
  }
}
