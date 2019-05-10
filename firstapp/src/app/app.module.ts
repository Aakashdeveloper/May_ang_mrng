import { NgModule } from '@angular/core';
// To display app
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All module declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All Component & pipe
    declarations: [
        AppComponent,
        MoviesComponent,
        ProductComponent
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
