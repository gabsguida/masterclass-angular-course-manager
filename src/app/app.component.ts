import { Component } from '@angular/core';

/* decorators 
-> Angular offers us a few class decorators. 
These are the top-level decorators that we use to express intent for classes. 
They allow us to tell Angular that a particular class is a component, or module, for example. 
And the decorator allows us to define this intent without having to actually 
put any code inside the class.
-> reference: https://ultimatecourses.com/blog/angular-decorators
*/

@Component({
  // selector -> serve para criar uma tag HTML. 
  // No index.html, a tag <app-rot></app-rot> corresponderá à app.component.ts
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'course-manager';
  name: string = 'Fulano';
}
