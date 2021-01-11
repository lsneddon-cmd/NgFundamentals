import { Component } from '@angular/core';

import { EventsListComponent } from './events/events-list.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'event-app',
  template: `
    <app-navigation></app-navigation>
    <events-list></events-list>`
})
export class EventsAppComponent {
  title = 'ng-Fundamentals';
}
