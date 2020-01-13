import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpPippo: HttpClient) {}

  public getPost(): Observable<any[]> {
    return this.httpPippo.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map(data => data.map( e => {
        e.title = 'post: ' + e.title;
        return e;
      } ))
    );

  }

  public getUser(): Observable<any> {
    return this.httpPippo.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
