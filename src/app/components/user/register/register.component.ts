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

  username: string;
  password1: string;
  password2: string;
  errorFlag: boolean;
  errorMsg = 'Password does not match';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.password1 === this.password2) {
      this.userService.findUserByUsername(this.username).subscribe((data) => {
        if (data) {
          this.errorMsg = 'Username already taken';
          this.errorFlag = true;
        } else {
          this.errorFlag = false;
          const user = {
            username: this.username,
            password: this.password1
          };
          this.userService.createUser(user)
            .subscribe((newUser: User) => {
              this.router.navigate(['user', newUser._id]);
            });
        }
      });
    } else {
      this.errorMsg = 'Password does not match';
      this.errorFlag = true;
    }
  }

}
