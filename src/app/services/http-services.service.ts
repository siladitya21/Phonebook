
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Users } from '../users';

const httpOptions =
{
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  baseUrl = "http://localhost:3000/";

  constructor(public http: HttpClient) { }

  insertContact(data: Users): Observable<any> {
    return this.http.post(this.baseUrl + 'contact', data);
  }

  updateContact(id: any, data: Users): Observable<any> {
    return this.http.put(this.baseUrl + 'contact/' + id, data);
  }

  deleteContact(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'contact/'+ id);
  }
}
