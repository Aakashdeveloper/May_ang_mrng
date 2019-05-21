import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal}', 'h4{color:tomato}']
    styleUrls: ['./product.component.css'],
    styles: [
        `.online{
            background-color: wheat
        }`
    ]
})

export class ProductComponent implements OnInit {
    title: string = '******Products Page********';
    showTable: boolean = true;
    showImage: boolean = false;
    userSearch: string;
    imageWidth: number = 100;
    serverstatus: string = 'offline';

    constructor(public productService: ProductService) {
        this.serverstatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    products: IProduct[];

    ngOnInit(): void {
        this.productService.getProducts()
        .subscribe((data) => this.products = data);
    }

    getColor() {
        return this.serverstatus === 'Online' ? 'green' : 'red';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(message: string): void {
        this.title = '*******Product List**********  ' + message;
    }
}
