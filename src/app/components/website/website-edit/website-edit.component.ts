import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  website;
  websites = [];

  constructor(private webService: WebsiteService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.websites = this.webService.findWebsitesByUser(this.userId);
      this.website = this.webService.findWebsiteById(this.websiteId);
    });
  }

  deleteWebsite() {
    this.webService.deleteWebsite(this.websiteId);
  }

}
