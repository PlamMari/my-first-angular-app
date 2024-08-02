import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  hasUser: boolean =  false;

  getUsers$(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUserById$(id: string) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  isUserAuthenticated() {
    return this.hasUser = !this.hasUser
  }
}
