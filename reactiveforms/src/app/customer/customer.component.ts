import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-cust',
    templateUrl: './customer.component.html'
})

export class CustomerComponent implements OnInit {
    customerForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.customerForm = this.fb.group({
            firstName: ['Deny', [Validators.required, Validators.minLength(3)]],
            lastName: ['Haf'],
            email: ['a@a', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9]$')]],
            password: ['1', [Validators.required, Validators.maxLength(8)]],
            phone: [''],
            notification: ''
        });
    }

    setNotification(notifyvia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if ( notifyvia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}
