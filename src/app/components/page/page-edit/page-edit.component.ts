import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PageService } from '../../../services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  page;
  pages;
  errorFlag: boolean;
  errorMsg = 'Page name cannot be empty';

  constructor(private pageService: PageService, private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.pageService.findPageById(this.pageId)
        .subscribe((page) => {
          this.page = page;
        });
      this.pageService.findPageByWebsiteId(this.websiteId)
        .subscribe((pages) => {
          this.pages = pages;
        });
    });
  }

  deletePage() {
    this.pageService.deletePage(this.pageId).subscribe(() => {
      this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
    });
  }

  updatePage() {
    if (this.page.name) {
      this.errorFlag = false;
      this.pageService.updatePage(this.pageId, this.page).subscribe((page) => {
        this.router.navigate(['user', this.userId, 'website', this.websiteId, 'page']);
      });
    } else {
      this.errorFlag = true;
    }
  }
}
