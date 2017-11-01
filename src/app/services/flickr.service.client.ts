import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class FlickrService {

  key = '3ca5c52352d4366f7a2e0a3780f807b9';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&sort=interestingness-desc&api_key=API_KEY&text=TEXT';

  constructor(private http: Http) { }

  api = {
    'searchPhotos' : this.searchPhotos
  };

  searchPhotos(searchText) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchText);
    return this.http.get(url);

  }
}
