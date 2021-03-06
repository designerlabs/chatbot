import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  url = "api/books";
  constructor(private http:Http) {
    
  }

  addBookWithObservable(book:any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post(this.url, book, options)
                     .map(this.extractData)
                     .catch(this.handleErrorObservable);
      }

      private extractData(res: Response) {
        let body = res.json();
              return body.data || {};
          }
          private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
          }
          private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
          }	

}
