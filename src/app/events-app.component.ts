import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'ng-Fundamentals';
}
