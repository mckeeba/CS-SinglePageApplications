import { Component } from '@angular/core';
import { Team } from '../team';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  submittedData = false;

  mascots = ['Tigers', 'Lions', 'Bears', 'Eagles'];
  model = new Team('', -1, '','');
 
  userEmail = '';
  constructor(public router: Router) {}

  submittedFormData: Team | null = null;

  onSubmit(teamForm:NgForm) {
    this.submittedData = true;

    
    this.submittedFormData = { ...this.model };

    this.router.navigate(['/results', this.submittedFormData.teamName, 
    this.submittedFormData.playerNumber, this.submittedFormData.mascot, this.submittedFormData.userEmail]);
  }

  newTeam() {
    this.model = new Team('', 10, '','');
  }

  newYork(): Team {
    const myTeam = new Team('New York', 10, 'Bears','potato21@gmail.com');

    console.log('My team is called ' + myTeam.teamName);
    return myTeam;
  }

  showFormControls(form: any) {
    return form && form.controls.teamName && form.controls.teamName.value;
  }
}
