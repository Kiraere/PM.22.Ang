import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000'; // приклад API

  constructor(private http: HttpClient) {}

  getAboutMe(): Observable<{ id: number, text: string }> {
    return this.http.get<{ id: number, text: string }>(`${this.apiUrl}/about`);
  }

  // GET-запит для отримання даних
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // POST-запит для надсилання даних
  createPost(postData: { title: string; body: string; userId: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, postData);
  }
}

