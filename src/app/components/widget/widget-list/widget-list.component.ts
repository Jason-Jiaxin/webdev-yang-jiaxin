import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit, AfterViewInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgets;
  header = 'HEADING';
  image = 'IMAGE';
  youtube = 'YOUTUBE';
  indexChange = {start: 0, end: 0};

  constructor(private widgetService: WidgetService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe((widgets) => {
          this.widgets = widgets;
        });
    });
  }

  ngAfterViewInit() {
    const self = this;
    $('#widgetContainer')
      .sortable({
        axis: 'y',
        handle: '.handle',
        placeholder: 'ui-state-highlight',
        start: function (event, ui) {
          console.log('Old position: ' + ui.item.index());
          // ui.item.data('start', ui.item.index());
          self.indexChange.start = ui.item.index();
        },
        stop: function (event, ui) {
          console.log('New position: ' + ui.item.index());
          self.indexChange.end = ui.item.index();
          console.log(self.indexChange);
          // console.log(ui.item);
          self.widgetService.updateWidgetIndex(self.indexChange, self.pageId)
            .subscribe((res) => {
              console.log(res);
            });
          //   refe.newIndexes.emit({
          //     startIndex: refe.initialIndex,
          //     endIndex: ui.item.index()});
          // }
        }
      })
      .disableSelection();
  }

}
