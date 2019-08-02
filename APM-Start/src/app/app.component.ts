import { Component } from "@angular/core";

// Metadata using decorator (prefix with an @ sign) and template
@Component({selector: 'pm-root',templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent 
{
  pageTitle: string = 'Angular application';
}
