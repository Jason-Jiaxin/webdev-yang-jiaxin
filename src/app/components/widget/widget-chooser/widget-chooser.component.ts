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
    const widget = {
      type: type
    };
    if (type === 'HEADING') {
      widget['size'] = 2;
    }
    this.widgetService.createWidget(this.pageId, widget)
      .subscribe((newWidget) => {
        this.router.navigate(['user', this.userId, 'website', this.websiteId,
          'page', this.pageId, 'widget', newWidget._id]);
      });
  }
}
