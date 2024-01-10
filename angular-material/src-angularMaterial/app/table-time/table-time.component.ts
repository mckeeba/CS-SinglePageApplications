import { Component } from '@angular/core';




export interface Top5 {
  movies: string;
  foods: string;
  ratingsOutOf10: number;
  tvShows: string;
}

const ELEMENT_DATA: Top5[] = [
  {movies: 'AcrossTheSpiderverse', foods: 'fries', tvShows: 'Lost', ratingsOutOf10:10},
  {movies: 'RevengeOfTheSith', foods: 'pizza', tvShows:'Andor', ratingsOutOf10:9},
  {movies: 'HarryPotterDeathlyHallowsP2', foods:'apples', tvShows:'Vikings', ratingsOutOf10:7},
  {movies: 'AvengersInfinityWar', foods:'strawberries', tvShows:'TheOffice', ratingsOutOf10:8},
  {movies: 'StarTrekIntoDarkness', foods: 'chicken', tvShows:'RingOfPower', ratingsOutOf10:6},
 
];







@Component({
  selector: 'app-table-time',
  templateUrl: './table-time.component.html',
  styleUrls: ['./table-time.component.css'],
  
})
export class TableTimeComponent {

  displayedColumns: string[] = ['top-movies', 'top-foods', 'top-tvshows','top-ratingsOutOf10'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<Top5>();

}
