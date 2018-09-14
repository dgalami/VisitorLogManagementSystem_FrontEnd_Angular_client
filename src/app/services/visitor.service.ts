import { Injectable } from '@angular/core';
import {HttpClient ,HttpParams, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Visitor } from '../models/visitor.model';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private httpheader={headers:new HttpHeaders({'Content-type':'application/json'})};

  constructor(private http:HttpClient) { }

  saveNewVisitorInfo(visitor): Observable<Visitor>{
    return this.http.post<Visitor>("http://localhost:8080/visitor/save", visitor, this.httpheader).pipe(
      catchError(this.errorHandler));
  }

  getVisitorByEmail(email:string):Observable<Visitor>{
    const params:HttpParams = new HttpParams()
    .append("email", email);
    return this.http.get<Visitor>("http://localhost:8080/visitor/findByemail", {params});
  }
  
  getVisitorByPhone(phone:string):Observable<Visitor>{
    const params:HttpParams = new HttpParams()
    .append('phone', phone);
    return this.http.get<Visitor>("http://localhost:8080/visitor/findByPhone", {params}).pipe(
      catchError(this.errorHandler));
  }

  getVisitorById(id:Number):Observable<Visitor>{
    return this.http.get<Visitor>("http://localhost:8080/visitor/findById" + "/" + id, this.httpheader).pipe(
      catchError(this.errorHandler));
  }


  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:8080/employee/getAll");
  }

    //handle error 
    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
  }
  
}
