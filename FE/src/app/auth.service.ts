import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  login(username: string, password: string, status: number): boolean {
    if (username === 'admin' && password === 'password' && status === 357)
    {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
  logout():void {
    this.isLoggedIn = false;
  }
  constructor() { }
}
