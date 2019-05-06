import { Component } from '@angular/core';

// metadata
@Component({
   selector: 'app-main',
   template: `<div>
                <h1> Welcome to Angular</h1>
                <app-movies></app-movies>
             </div>`
})


// export to make reuse
export class AppComponent {

}
