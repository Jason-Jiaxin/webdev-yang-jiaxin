import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  @Input() widget;
  userId: string;
  websiteId: string;
  pageId: string;
  baseUrl;
  form;
  fileSelected: File;

  constructor(private widgetService: WidgetService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
    this.baseUrl = this.widgetService.baseUrl;
    this.acRoute.params.subscribe(params => {
    });
  }

  public fileEvent($event) {
    this.fileSelected = $event.target.files[0];
    console.log('file selected: ');
    console.log(this.fileSelected);
  }

  uploadImage() {
    const formData = new FormData();
    formData.append('myFile', this.fileSelected);
    formData.append('widgetId', this.widget._id);
    console.log('Upload, image widget');
    console.log();
    this.widgetService.uploadFile(formData)
      .subscribe((widget) => {
        console.log(widget);
        this.router.navigate(['user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
