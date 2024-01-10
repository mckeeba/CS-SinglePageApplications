import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(private dialog:MatDialog){}

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 4,
          coolCard: { cols: 4, rows: 1 },
          gif: { cols: 4, rows: 4 }
        };
      }
 
     return {
        columns: 4,
        coolCard: { cols: 4, rows: 2}, 
        gif: { cols: 4, rows: 4 }
      };
    })
  );

  public comboCode = [0, 5, 1, 7, 9];
  public currentCode = [0, 0, 0, 0, 0];
  public correctComboCode = [2, 4, 1, 0, 3];
  //19507
  public isPatternCorrect = false;

  rotate(x: number): void {
    this.currentCode[x] = (this.currentCode[x] + 1) % this.comboCode.length;
    this.comboCorrect();
  }

  comboCorrect(): void {
    const current = this.currentCode;
    for (let i = 0; i < this.correctComboCode.length; i++) {
      if (current[i] !== this.correctComboCode[i]) {
         this.isPatternCorrect = false;
         return;
      }
    }
   
     this.isPatternCorrect = true;
     this.openDialog();

  }

  openDialog()
  {
    this.dialog.open(DialogBoxComponent,
      {
        width:'300px',
        
      });
  }
}
