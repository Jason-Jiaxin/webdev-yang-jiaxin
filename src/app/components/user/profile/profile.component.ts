import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  user;
  constructor(private userService: UserService, private acRoute: ActivatedRoute) { }

  ngOnInit() {
    this.acRoute.params.subscribe(params => {
      console.log('Profile compoment params change');
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe((user: User) => {
          console.log('user found from service');
          this.user = user;
        });
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe((user: User) => {
        console.log('user updated from service');
        this.user = user;
      });
  }

}
