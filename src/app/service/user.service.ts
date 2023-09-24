import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    let myHeaders = new HttpHeaders({'myHeader': ['Header value', 'Header value 123']})
    myHeaders = myHeaders.set('id', '123')
    myHeaders = myHeaders.append('id', '2312')
    return this.http.get<User[]>(`${this.apiUrl}/users`,{headers: myHeaders})
  }

  getUser(): Observable<User>{

    let myHeader = new HttpHeaders({'id': ['123', '123']})
    myHeader = myHeader.set('name', 'blento')
    return this.http.get<User>(`${this.apiUrl}/users/1`, {headers: myHeader})
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  updateUser(user:User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  patchUser(user:User): Observable<User>{
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`)
  }


  
}
