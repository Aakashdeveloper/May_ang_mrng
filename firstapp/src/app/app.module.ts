import { NgModule } from '@angular/core';
// To display app
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discountPipe';
import { SearchPipe } from './products/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],

    // All Component & pipe
    declarations: [
        AppComponent,
        MoviesComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        SearchPipe,
        StarComponent
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All services
    providers: [
        ProductService
    ]
})

export class AppModule {

}
