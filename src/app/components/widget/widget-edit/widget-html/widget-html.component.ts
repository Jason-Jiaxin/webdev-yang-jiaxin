import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  @Input() widget;

  constructor() { }

  ngOnInit() {
  }

}
