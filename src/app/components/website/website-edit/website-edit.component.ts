import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

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

  constructor(private webService: WebsiteService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.webService.findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });
      this.webService.findWebsiteById(this.websiteId)
        .subscribe((website) => {
          console.log(website);
          this.website = website;
        });
    });
  }

  deleteWebsite() {
    this.webService.deleteWebsite(this.websiteId)
      .subscribe((website) => {
        this.router.navigate(['user', this.userId, 'website']);
      });
  }

  updateWebsite() {
    this.webService.updateWebsite(this.websiteId, this.website)
      .subscribe(() => {
        this.router.navigate(['user', this.userId, 'website']);
      });
  }

}
