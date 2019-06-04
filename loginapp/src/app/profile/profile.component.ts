import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../login-form/loginservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token;
  userinfo;

  constructor(private loginserviceService: LoginserviceService) { }

  ngOnInit() {
    this.token =  localStorage.getItem('TOKEN_NUMBER');
    this.loginserviceService.getUserRole(this.token)
      .subscribe((res) => this.userinfo = res);
  }

}
