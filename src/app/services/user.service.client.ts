import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  createUser(user: any) {
    return this.http.post(this.baseUrl + '/api/user', user)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  findUserByCredentials(username, password) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  updateUser(userId, user) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, user)
      .map((res: Response) => {
          return res.json();
        }
      );
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
          return res.json();
        }
      );
  }


}
