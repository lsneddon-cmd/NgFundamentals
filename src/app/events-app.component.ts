import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <app-navigation></app-navigation>
    <events-list></events-list>`
})
export class EventsAppComponent {
  title = 'ng-Fundamentals';
}
