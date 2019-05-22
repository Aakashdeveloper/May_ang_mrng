import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html'
})


export class ProductDetailComponent implements OnInit {
    id: number;
    details: IProduct[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private prodService: ProductService) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.prodService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

}


/*
name: string;
    image: string;
    description: string;

this.route.queryParams
                .subscribe((data) => {
                    this.name = data['name'];
                    this.image = data['img'];
                    this.description = data['desc'];
                });

*/
