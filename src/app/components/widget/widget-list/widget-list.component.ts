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
    $('#widgetContainer')
      .sortable({
        axis: 'y',
        handle: '.handle',
        placeholder: 'ui-state-highlight',
        start: function (event, ui) {
          console.log('Old position: ' + ui.item.index());
          // refe.initialIndex = ui.item.index();
        },
        stop: function (event, ui) {
          console.log('New position: ' + ui.item.index());
          console.log(ui.item);
          //   refe.newIndexes.emit({
          //     startIndex: refe.initialIndex,
          //     endIndex: ui.item.index()});
          // }
        }
      })
      .disableSelection();
  }

}
