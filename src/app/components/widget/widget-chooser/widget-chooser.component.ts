import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;

  constructor(private widgetService: WidgetService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
    });
  }

  createWidget(type: string) {
    let widget = {
      widgetType: type,
      _id: '0',
      size: 2
    }
    widget = this.widgetService.createWidget(this.pageId, widget);
    this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', widget._id]);
  }

}
