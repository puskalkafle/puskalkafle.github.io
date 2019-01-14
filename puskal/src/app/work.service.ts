import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IWork } from './work';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class WorkService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getAllWorks(): Observable<IWork[]>{
    return this.http.get<IWork[]>(this._url)
        .pipe(tap(data => '') , catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}
