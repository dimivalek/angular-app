import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(username: string, password: string) {
    const url = "http://localhost:5000/api/signup"
    return this.http.post<any>(url,
      {
        username: username,
        password: password,
      }
    );
  }
  signin(username: string, password: string) {
    const url = "http://localhost:5000/api/signin"
    return this.http.post<any>(url,
      {
        username: username,
        password: password
      }
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
