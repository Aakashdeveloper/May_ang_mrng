import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function ratingRange(min: number, max: number) {
    return(inval: AbstractControl ): {[key: string]: boolean} | null => {
        if (inval.value !== undefined && (isNaN(inval.value) || inval.value < min || inval.value > max)) {
            return {range: true};
        }
        return null;
    };
}

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
            notification: '',
            rating: ['3', [Validators.required, ratingRange(1, 5)]]
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
