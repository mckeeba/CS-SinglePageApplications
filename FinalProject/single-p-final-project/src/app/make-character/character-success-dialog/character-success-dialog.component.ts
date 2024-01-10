import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-character-success-dialog',
  templateUrl: './character-success-dialog.component.html',
  styleUrls: ['./character-success-dialog.component.css']
})
export class CharacterSuccessDialogComponent {


  constructor(@Inject(MAT_DIALOG_DATA)public data:any){}
}
