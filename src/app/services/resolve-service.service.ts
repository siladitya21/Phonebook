import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router,ActivatedRoute,ActivatedRouteSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ResolveServiceService implements Resolve<any> {
public id:any;
  constructor(private http: HttpClient) { }

  resolve( activatedRouteSnapshot:ActivatedRouteSnapshot): Observable<any> {
    let baseUrl = 'http://localhost:3000/';
   
    this.id = activatedRouteSnapshot.params._id;

    if(this.id)
    return this.http.get(baseUrl+'contact/'+this.id);
    else
    return this.http.get(baseUrl+'contact');
  
  }
}
