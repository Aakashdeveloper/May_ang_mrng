import { Component, OnChanges,
        OnInit, OnDestroy, Input,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {
    // this is always get call first and
    // only one time
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        console.log('inside Constructor');
    }

    // This work on change detection
    ngOnChanges() {
        console.log(this.rating);
        this.starWidth = this.rating * 86 / 5.2;
    }

    // This fires after onchanges
    ngOnInit() {
        console.log('inside oninit');
    }

    // when you looose context
    ngOnDestroy() {
        console.log('inside on destroy');
    }

    onStarClick(): void {
        this.ratingClicked.emit(`Rating clicked is ${this.rating}`);
    }
}
