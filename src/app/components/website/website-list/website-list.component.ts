import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: string;
  websites = [];

  constructor(private webService: WebsiteService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websites = this.webService.findWebsitesByUser(this.userId);
    });
  }

}
