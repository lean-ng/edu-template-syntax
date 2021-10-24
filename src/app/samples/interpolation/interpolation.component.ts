import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  frameworkTitle = 'Angular';
  frameworkHomepage = 'https://angular.io';
  topics = [
    'Template Syntax',
    'Component Interaction',
    'Services and DI',
    'Unit Testing',
  ];
}
