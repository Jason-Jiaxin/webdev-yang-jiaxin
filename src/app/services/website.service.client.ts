import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()
export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById,
    'updateWebsite' : this.updateWebsite,
    'deleteWebsite' : this.deleteWebsite
  };

  createWebsite(userId, website) {
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsiteById(websiteId) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWebsite(websiteId, website) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWebsite(websiteId) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }


}
