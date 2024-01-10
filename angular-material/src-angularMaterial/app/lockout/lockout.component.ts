import { Component } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-lockout',
  templateUrl: './lockout.component.html',
  styleUrls: ['./lockout.component.css']
})
export class LockoutComponent {
  isLocked = false;
 progressBarMode: ProgressBarMode = 'buffer'; 
  toggleLock() {
    this.isLocked = !this.isLocked;
    this.progressBarMode = this.isLocked ? 'indeterminate' : 'buffer';
  }

  

}
