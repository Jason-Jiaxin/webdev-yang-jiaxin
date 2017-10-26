import { Component, OnInit } from '@angular/core';
import { WebsiteService} from '../../../services/website.service.client';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  websiteName: string;
  websiteDesp: string;
  websites = [];

  constructor(private webService: WebsiteService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.webService.findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });
    });
  }

  createWebsite() {
    if (this.websiteName) {
      const website = {
        name: this.websiteName,
        description: this.websiteDesp
      };
      this.webService.createWebsite(this.userId, website)
        .subscribe((newWebsite) => {
          this.router.navigate(['user', this.userId, 'website']);
        });
    }
  }

}
