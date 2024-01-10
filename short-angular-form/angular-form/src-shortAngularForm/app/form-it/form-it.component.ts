import { Component } from '@angular/core';

@Component({
  selector: 'app-form-it',
  templateUrl: './form-it.component.html',
  styleUrls: ['./form-it.component.css']
})
export class FormItComponent {

  submittedData:any = {};

  onSubmit(contactForm:any)
  {
    this.submittedData = contactForm.value;
  }
 



}
