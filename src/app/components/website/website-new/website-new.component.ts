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
      this.websites = this.webService.findWebsitesByUser(this.userId);
    });
  }

  createWebsite() {
    if (this.websiteName) {
      let website = {
        name: this.websiteName,
        description: this.websiteDesp
      };
      website = this.webService.createWebsite(this.userId, website);
      this.router.navigate(['user', this.userId, 'website']);
    }
  }

}
