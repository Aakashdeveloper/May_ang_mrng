import { NgModule } from '@angular/core';
// To display app
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myupper.pipe';
import { DiscountPipe } from './products/discountPipe';
import { SearchPipe } from './products/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { OrderComponent } from './orders/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/notfound.component';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'music', component: MusicComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ])
    ],

    // All Component & pipe
    declarations: [
        AppComponent,
        MoviesComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        SearchPipe,
        StarComponent,
        HomeComponent,
        MusicComponent,
        OrderComponent,
        ProductDetailComponent,
        NotFoundComponent
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
