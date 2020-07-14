import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:Student[];

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getStudents().subscribe(
      response =>{this.students = response;}
     );
  }

  deleteStudent(student: Student): void {
    this.httpClientService.deleteStudent(student)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      })
  };
}
