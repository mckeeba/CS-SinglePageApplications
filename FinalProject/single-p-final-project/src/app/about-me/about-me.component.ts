import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';

export interface Top5Artists {
  artist: string;
  bestSong: string;
  songRating: number;
  
}

const ELEMENT_DATA: Top5Artists[] = [
  {artist: 'Starset', bestSong: 'PerfectMachine', songRating:9},
  {artist: 'Fivefold',bestSong: 'Wont Let Go', songRating:10},
  {artist: 'RYX',bestSong: 'Moths', songRating:9},
  {artist: 'David Chappell',bestSong: 'Pormetheus', songRating:8},
  {artist: 'Hiroyuki Sawano',bestSong: 'Voices Of The Chord', songRating:9}
];

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  displayedColumns: string[] = ['artist', 'bestSong', 'songRating'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Top5Artists>();
  constructor(private router:Router){}

  goBackToHome()
  {
    this.router.navigate(['']);
  }

 onRowClick(row:Top5Artists):void
 {
  let externalUrl: string = '';

  switch(row.artist)
  {
    case 'Starset':
      externalUrl = 'https://www.starsetonline.com/';
      break;
      
    case 'Fivefold':
      externalUrl = 'https://www.fivefoldband.com/';
      break;

    case 'RYX':
      externalUrl = 'https://www.ry-x.com/';
      break;
    
    case 'David Chappell':
      externalUrl = 'https://davidchappellmusic.com/';
      break;

    case 'Hiroyuki Sawano':
      externalUrl = 'https://www.sawanohiroyuki.com/';
      break;

      default:

  }

  window.open(externalUrl,'_blank');
 }


}
