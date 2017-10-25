import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()
export class WidgetService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  uploadFile(formData) {
    return this.http.post(this.baseUrl + '/api/upload', formData).map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  createWidget(pageId, widget) {
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetsByPageId(pageId) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWidget(widgetId, widget) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWidget(widgetId) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWidgetIndex(indexChange, pageId) {
    console.log('update widget index client');
    console.log(indexChange);
    console.log(pageId);
    // this.baseUrl + '/api/page/' + pageId + '/widget?initial=' + indexChange.start + '&final=' + indexChange.end, indexChange)
    return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget', indexChange)
      .map(
        (res: Response) => {
          console.log('response from server');
          return res.json();
        }
      );
  }
}
