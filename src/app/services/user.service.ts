import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private userAuthService: UserAuthService) {

  }

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  contextPath = 'http://localhost:6633/';
  saveUser = this.contextPath + "public/register";
  loginuser = this.contextPath + "public/login";

  //signup the user
  public addUser(user: any) {
    return this.http.post(`${this.saveUser}`, user);
  }

  public loginUser(user: any) {
    return this.http.post(`${this.loginuser}`, user, { headers: this.requestHeader });
  }

  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; i++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
          else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;

  }
}
