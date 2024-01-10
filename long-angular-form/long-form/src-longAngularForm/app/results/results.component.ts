import { Component } from '@angular/core';
import{Team}from'../team';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

 formData:Team;

 constructor(private route:ActivatedRoute)
 {
  this.formData = {
    teamName: this.route.snapshot.paramMap.get('teamName')!,
    playerNumber:parseInt(this.route.snapshot.paramMap.get('playerNumber')!, 10),
    mascot: this.route.snapshot.paramMap.get('mascot')!,
    userEmail: this.route.snapshot.paramMap.get('userEmail')!,
  };
 }

 
 
  }






