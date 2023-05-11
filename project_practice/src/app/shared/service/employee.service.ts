import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public url = 'http://localhost:3000/employee';

  getEmployeeData() {
    return this.http.get(this.url);
  }
}
