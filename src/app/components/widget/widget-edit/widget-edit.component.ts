import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import {WidgetHeaderComponent} from './widget-header/widget-header.component';
import {WidgetImageComponent} from './widget-image/widget-image.component';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget;
  header = 'HEADING';
  image = 'IMAGE';
  youtube = 'YOUTUBE';

  constructor(private widgetService: WidgetService, private acRoute: ActivatedRoute, private router: Router) { }

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

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(() => {
        this.router.navigate(['user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }

  updateWidget() {
    // this.widget = this.headerComponent.widget;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((widget) => {
        this.router.navigate(['user', this.userId, 'website',
          this.websiteId, 'page', this.pageId, 'widget']);
      });
  }
}
