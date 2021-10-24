import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

import { HomeComponent } from './home/home.component';
import { EventBindingComponent } from './samples/event-binding/event-binding.component';
import { InterpolationComponent } from './samples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './samples/property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    HomeComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
