import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  frameworkTitle = 'Angular';
  frameworkHomepage = 'https://angular.io';
  topics = ['Template Syntax', 'Component Interaction', 'Services and DI'];

  newTopic = '';

  addTopic(): void {
    const topic = this.newTopic.trim();
    if (topic) {
      this.topics.push(topic);
    }
    this.newTopic = '';
  }
}
