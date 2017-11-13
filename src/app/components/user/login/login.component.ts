import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() { }

  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe((user) => {
        if (user) {
          console.log(user);
          this.sharedService.user = user;
          this.router.navigate(['profile']);
        } else {
          this.errorFlag = true;
        }
      });
  }

}
