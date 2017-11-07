import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  @Input() widget;

  constructor() { }

  ngOnInit() {
  }

}
