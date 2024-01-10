import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Character } from './character';
import { MatDialog } from '@angular/material/dialog';
import { CharacterSuccessDialogComponent } from './character-success-dialog/character-success-dialog.component';

//import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-make-character',
  templateUrl: './make-character.component.html',
  styleUrls: ['./make-character.component.css']
})
export class MakeCharacterComponent {
  
  constructor(private router:Router, private dialog:MatDialog){}

  goBackToHome()
  {
    this.router.navigate(['']);
  }

  //change to abilites
  powers = ['Psychic','Shadow','SwordMaster',
  'Juggernaut','Healer','Vampire','SpellCaster'];

  chRace = ['Human','Elf','Dwarf','Orc','Undead','Livari','Daboi','Void'];
  chGender=['male','female','non-binary'];
  chWeapon=['gun','greatsword','hammer','dual-sword','wand','staff','axe','fists','runes','fangs','mind'];
  model = new Character(11,'Johnny',0,'Human','non-binary', this.powers[0],'gun','It begins with..');

  submitted = false;


  onSubmit()
  {
    this.submitted = true;
    this.openSuccessDialog();
  }

  newCharacter()
  {
    this.model = new Character(21,'',0,'','','','','');
  }

  openSuccessDialog()
  {
    this.dialog.open(CharacterSuccessDialogComponent,
      {
        width:'500px',
        data:this.model
           
      });
  }

}
