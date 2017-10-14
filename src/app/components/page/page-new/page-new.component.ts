import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageName: string;
  pageDesp: string;
  pages;

  constructor(private pageService: PageService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    });
  }

  createPage() {
    if (this.pageName) {
      let page = {
        name: this.pageName,
        description: this.pageDesp
      };
      page = this.pageService.createPage(this.websiteId, page);
      this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    }
  }

}
