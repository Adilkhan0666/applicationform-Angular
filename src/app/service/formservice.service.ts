import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http: HttpClient) { }

  createTodo(data) {
    console.log("username" + data.username + "********" + "email" + data.email)
    return this.http.post(`http://localhost:8080/save`, data);
  }
}
