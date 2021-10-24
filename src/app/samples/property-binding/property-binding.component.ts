import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  frameworkTitle = 'Angular';
  frameworkHomepage = 'https://angular.io';
  topics = [
    'Template Syntax',
    'Component Interaction',
    'Services and DI',
    'Unit Testing',
  ];
}
