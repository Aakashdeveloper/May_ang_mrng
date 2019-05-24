import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
    templateUrl: './music.component.html'
})


export class MusicComponent implements OnInit {
    musicData: any[];

    constructor(private musicService: MusicService) {}

    ngOnInit() {
        this.musicService.getArtists()
        .subscribe((data) => {this.musicData = data[0].artists });
    }

}
