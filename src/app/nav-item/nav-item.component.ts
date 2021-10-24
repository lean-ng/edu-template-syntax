import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  @Input()
  path!: string;
  @Input()
  title!: string;
}
