import { Component } from '@angular/core';
import { ICustomer } from '../models/customer.model';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})


export class CustomerFormComponent {
    languages: any[] = ['Angular', 'React', 'Python', 'Node', 'Golang'];
    mycust = new ICustomer('John', '', '', '', true, 'male', '');

    firstToUpper(value): void {
        if (value.length > 0) {
            this.mycust.firstname = value.charAt(0).toUpperCase() + value.slice(1);
        } else  {
            this.mycust.firstname =  value;
        }
    }
}
