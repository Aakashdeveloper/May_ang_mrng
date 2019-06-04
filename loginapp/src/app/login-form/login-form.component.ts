import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  constructor(private loginserviceService: LoginserviceService,
              private router: Router) { }

  login = new LoginModel('', '12345678');

  submitLogin(form: NgForm): void {
    this.loginserviceService.postLogin(form.value)
      .subscribe((res) => this.loginserviceService.getUserRole(res['token'])
      .subscribe((response) => this.validateUser(response['role'])) );
  }


  validateUser(typeOfuser): void {
    localStorage.setItem('ROLE_TYPE', typeOfuser);
    this.router.navigate(['/profile']);
  }

}
