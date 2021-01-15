import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component , OnInit} from '@angular/core';

import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service'

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events!:any[]

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string): void {
    this.toastrService.success(eventName);
  }

}
