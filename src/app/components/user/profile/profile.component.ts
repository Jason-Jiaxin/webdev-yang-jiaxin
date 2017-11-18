import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  user;
  constructor(private userService: UserService, private acRoute: ActivatedRoute,
               private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      // console.log('Profile compoment params change');
      // this.userId = params['uid'];
      // this.userService.findUserById(this.userId)
      //   .subscribe((user: User) => {
      //     console.log('user found from service');
      //     this.user = user;
      //   });
      this.user = this.sharedService.user || {};
    });
  }

  updateUser() {
    this.userService.updateUser(this.user._id, this.user)
      .subscribe((user: User) => {
        console.log('user updated from service');
        this.user = user;
      });
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }

}
