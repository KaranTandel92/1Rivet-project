import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/service/employee.service';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project_practice';

  employees: any;
  name: String = 'Angular';
  text: String = 'The text';
  model2!: string;
  model!: NgbDateStruct;
  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {}

  getEmployeeDetails() {
    this.employeeService
      .getEmployeeData()
      .subscribe((res) => (this.employees = res));
  }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
}
