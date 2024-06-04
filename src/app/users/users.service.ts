import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class usersService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<users[]>('http://localhost:3000/users');
  }

  create(payload: users) {
    return this.http.post<users[]>('http://localhost:3000/users', payload);
  }
  getById(id: number) {
    return this.http.get<users>('http://localhost:3000/users/'+id);
  }

  update(payload: users) {
    return this.http.put('http://localhost:3000/users/' + payload.id, payload);
  }
  delete(id:number){
    return this.http.delete<users>('http://localhost:3000/users/'+id);
 }
}
