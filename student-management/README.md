# Student Management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## TypeScript
TypeScript is a superset of JavaScript. It is a strongly typed language. So unlike JavaScript we know if some syntax is wrong while typing itself and not at runtime. In Angular it is compiled to JavaScript while rendering application in browser.

## Component
In angular we break complex code into reusable parts called components. Major part of the development with Angular 7 is done in the components. Components are basically classes that interact with the .html file of the component, which gets displayed on the browser.

## Service
In angular we might have scenarios where some code needs to be reused in multiple components. For example a data connection that fetches data from database might be needed in multiple components. This is achieved using services.

## Create employee component
We will be creating Employee Component which will fetch data from spring boot and display it. Lets begin with the employee component Open a command prompt and use the following command- 
> ng g component employee

For this angular will have created the following 4 files-
employee.component.ts
employee.component.spec.ts
employee.component.html
employee.component.css

Next in the app-routing.module.ts we will be defining the url for accessing this component-

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path:'', component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
## Create HttpClient Service
Next we will be creating a HTTPClient Service. This service will be having the httpClient and will be responsible for calling http GET request to the backend spring boot application. In Angular a service is written for any cross cutting concerns and may be used by more than one components.

> ng generate service service/httpClient

The following service files are created-
http-client.service.ts
http-client.service.spec.ts

We will be modifying the http-client.service.ts file. In the constructor define the HTTPClient instance we will be using to make a call to the Spring Boot application. Here we will be using the Angular HTTPClient for calling the Spring Boot API to fetch the employee data. Also we will creating a method which makes call to the spring boot application using the defined httpClient.

```
export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/employee';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {}

  getEmployees() {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }
}
```
Also we need to add the HTTPClientModule to the app.module.ts

## Insert HttpClient Service in Employee Component
Next using constructor dependency injection we will be providing the EmployeeComponent an instance of HttpClientService. Using this service we make a call to spring boot application to get a list of employees.

## Install bootstrap 
Using Angular CLI (npm install). From the command line interface install bootstrap and references it in angular.json
> npm install bootstrap --save
If you want to use bootstrap Javascript function, you need to install JQuery and popperjs with it. BootstrapJS depends on JQuery
> npm install jquery --save
If you need the functionality of a popover in angular application, you can add popper.js. You can learn more on this https://popper.js.org/index.html#example10
> npm install popper.js --save
Reference the path in angular.json file. Make sure you reference it under build node. check out the code below.

```
"styles": [

              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
