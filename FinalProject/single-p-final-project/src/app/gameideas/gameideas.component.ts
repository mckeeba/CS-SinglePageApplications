import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gameideas',
  templateUrl: './gameideas.component.html',
  styleUrls: ['./gameideas.component.css']
})
export class GameideasComponent {
  
  constructor(private router:Router){}
  goBackToHome()
  {
    this.router.navigate(['']);
  }

}
