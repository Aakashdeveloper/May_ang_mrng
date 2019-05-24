import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myupper.pipe';
import { DiscountPipe } from './discountPipe';
import { SearchPipe } from './productSearch.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        SearchPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]

})

export class ProductModule {

}
