import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Student } from '../student/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student("","","");

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  addStudent(): void {
    this.httpClientService.createStudent(this.student)
        .subscribe( data => {
          alert("Student created successfully.");
        });

  };

}
