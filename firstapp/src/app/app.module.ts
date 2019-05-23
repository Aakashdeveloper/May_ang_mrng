import { NgModule } from '@angular/core';
// To display app
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './orders/order.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductModule } from './products/product.module';
import { MusicModule } from './music/music.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        MusicModule,
        AppRoutingModule
    ],

    // All Component & pipe
    declarations: [
        AppComponent,
        HomeComponent,
        OrderComponent,
        NotFoundComponent
    ],
    // only first component
    bootstrap: [
        AppComponent
    ],
    // All services
    providers: []
})

export class AppModule {

}
