import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LogVisitor } from 'src/app/services/log.model';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  private httpheader={headers:new HttpHeaders({'Content-type':'application/json'})};
  
  constructor(private http: HttpClient) { }

  createLog(logVisitor):Observable<LogVisitor>{
    return this.http.post<LogVisitor>("http://localhost:8080/log/createLog",logVisitor, this.httpheader);
  }

  //checked in or update log
  VisitorLogOut(logVisitor):Observable<LogVisitor>{
    return this.http.put<LogVisitor>("http://localhost:8080/log/updateLog", logVisitor, this.httpheader).pipe(
      catchError(this.errorHandler));
  }

  //get by visitor id
  getVisitorLogById(id:Number):Observable<LogVisitor>{
    return this.http.get<LogVisitor>("http://localhost:8080/log/getByVId" + "/" + id, this.httpheader).pipe(
      catchError(this.errorHandler));
  }


  getAllLog():Observable<LogVisitor[]>{
    return this.http.get<LogVisitor[]>("http://localhost:8080/log/getAllLog", this.httpheader);
  }


  //get all logged In
  getLoggedIn():Observable<LogVisitor[]>{
    return this.http.get<LogVisitor[]>("http://localhost:8080/log/getLoggedIn", this.httpheader);

  }

    //handle error 
    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
  }
}
