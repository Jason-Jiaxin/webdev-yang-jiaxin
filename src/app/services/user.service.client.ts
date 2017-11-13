import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private sharedService: SharedService, private router: Router) { }

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  register(username, password) {
    const url = this.baseUrl  + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const url = this.baseUrl + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        console.log(response);
        return response.json();
      });
  }

  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((status) => {
        return status;
      });
  }

  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }



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
