import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  @Input() widget;
  // userId: string;
  // websiteId: string;
  // pageId: string;
  // widgetId: string;
  // widget;

  constructor(private widgetService: WidgetService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      // this.userId = params['uid'];
      // this.websiteId = params['wid'];
      // this.pageId = params['pid'];
      // this.widgetId = params['wgid'];
      // this.widget = this.widgetService.findWidgetById(this.widgetId);
    });
  }
}
