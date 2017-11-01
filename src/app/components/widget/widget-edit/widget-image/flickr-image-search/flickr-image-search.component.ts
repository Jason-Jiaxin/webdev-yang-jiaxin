import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WidgetService } from '../../../../../services/widget.service.client';
import {FlickrService} from '../../../../../services/flickr.service.client';
@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget;
  searchText;
  photos;
  selectedPhoto;
  selectedIndex;

  constructor(private widgetService: WidgetService, private acRoute: ActivatedRoute,
              private router: Router, private flickrService: FlickrService) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe((widget) => {
          this.widget = widget;
        });
    });
  }

  searchPhotos() {
    this.flickrService.searchPhotos(this.searchText)
      .subscribe((data: any) => {
        // console.log(data._body);
        const body = JSON.parse(data._body);
        // console.log(body);
        this.photos = body.photos.photo;
        console.log(this.photos);
      });
  }

  selectPhoto(i, pic) {
    this.selectedPhoto = pic;
    this.selectedIndex = i;
    console.log(this.selectedPhoto);
  }

  setImage() {
    let url = 'https://farm' + this.selectedPhoto.farm + '.staticflickr.com/' + this.selectedPhoto.server;
    url += '/' + this.selectedPhoto.id + '_' + this.selectedPhoto.secret + '_b.jpg';
    this.widget.url = url;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(() => {
        this.router.navigate(['user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
      });
  }

}
