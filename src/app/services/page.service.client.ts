import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

// injecting service into module
@Injectable()
export class PageService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
    'findPageById' : this.findPageById,
    'updatePage' : this.updatePage,
    'deletePage' : this.deletePage
  };

  createPage(websiteId, page) {
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findPageByWebsiteId(websiteId) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findPageById(pageId) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updatePage(pageId, page) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId, page)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deletePage(pageId) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
