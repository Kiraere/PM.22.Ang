import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // приклад API

  constructor(private http: HttpClient) {}

  // GET-запит для отримання даних
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST-запит для надсилання даних
  createPost(postData: { title: string; body: string; userId: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
}
