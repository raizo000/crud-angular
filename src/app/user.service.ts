import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user.modal';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseURL + 'users');
  }

  getUserById(id: number): Observable<User> {
    console.log('get user by id', id);
    return this.httpClient.get<User>(`${this.baseURL}users/${id}`);
  }
}
