import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutData = {
    title : "About this project",
    description: {
      intro: "This Angular applications is the setup for an assignment. The assignment involves four things:",
      purposes: [
        "Creating and using a module to manage Angular Material imports", 
        "Creating and using a module to manage Routing",
        "Using localStorage to save and retrieve data",
        "Creating and using a service to manage all interactions with localStorage."
      ],
      outro: `If you have an AppState email address, then you can find the full instructions at the link below.
        You can also use the other links to find helpful information on the topics covered`
    },
    links: [
      {name: "Instructions", href: "https://docs.google.com/document/d/1AMYzmgs5zFp5rmOuP-ALPuE4DHdcOUJo3txUTOPuYcE/edit?usp=sharing"},
      {name: "Angular Services", href: "https://angular.io/guide/architecture-services"},
      {name: "Angular Routing", href: "https://angular.io/guide/router"},
      {name: "Local Storage", href: "https://www.digitalocean.com/community/tutorials/js-introduction-localstorage-sessionstorage"},
    ]
  };
}
