import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password1: String;
  password2: String;
  errorFlag: boolean;
  errorMsg = 'Password does not match';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.password1 === this.password2) {
      this.errorFlag = false;
      const user = {
        _id: '',
        username: this.username,
        password: this.password1
      };
      this.userService.createUser(user)
        .subscribe((newUser: User) => {
          this.router.navigate(['user', newUser._id]);
        });
    } else {
      this.errorFlag = true;
    }
  }

}
