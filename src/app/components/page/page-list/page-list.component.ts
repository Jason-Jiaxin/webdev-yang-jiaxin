import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pages;

  constructor(private pageService: PageService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    });
  }

}
