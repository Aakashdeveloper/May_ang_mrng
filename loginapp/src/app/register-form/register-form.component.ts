import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterServiceService } from './register-service.service';
import { Router } from '@angular/router';
import { RegisterModel } from './register.model';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private registerServiceService: RegisterServiceService,
              private router: Router) { }

  register = new RegisterModel('john', 'a@a.com', '12345678');

  submitRegister(form: NgForm) {
    this.registerServiceService.postUser(form.value)
      .subscribe((res) => this.router.navigate(['/login']));
  }
}
