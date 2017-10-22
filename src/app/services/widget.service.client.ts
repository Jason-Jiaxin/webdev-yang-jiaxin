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
}
