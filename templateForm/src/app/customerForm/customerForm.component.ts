import { Component } from '@angular/core';
import { ICustomer } from '../models/customer.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/formposter.seervice';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})


export class CustomerFormComponent {
    languages: any[] = ['Angular', 'React', 'Python', 'Node', 'Golang'];
    mycust = new ICustomer('John', 'Stephen', 'a@a.com', '12345678', '123', true, 'male', 'Angular');
    hasCodeLangError: boolean = false;
    passworderror:boolean =  false;

    constructor(private formPosterService: FormPosterService) {}
    firstToUpper(value): void {
        if (value.length > 0) {
            this.mycust.firstname = value.charAt(0).toUpperCase() + value.slice(1);
        } else  {
            this.mycust.firstname =  value;
        }
    }

    validateCodeLang(event): void {
        if (this.mycust.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }
    validatepassword(event): void {
        if (this.mycust.password.length < 8) {
            this.passworderror = true;
        } else {
            this.passworderror = false;
        }
    }
    validateForm(event): void {

    }

    submitForm(form: NgForm): void {
        // console.log('>>>>>>>>>', form.value);
        this.formPosterService.employeeForm(form.value)
            .subscribe((res) => console.log('data submitted'));
    }
}
