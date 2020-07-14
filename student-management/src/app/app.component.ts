import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Management';
  name = 'Angular';
  enableEdit = false;
  enableEditIndex = null;
  backendData = [{
    "name": 'Target',
    "value": '100',
    "description": 'abc'
  },
  {
    "name": 'Size',
    "value": '20',
    "description": 'def'
  },
  {
    "name": 'Industry',
    "value": '40',
    "description": 'ghi'
  }]

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }
}
