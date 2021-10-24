import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './samples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './samples/property-binding/property-binding.component';

const routes: Route[] = [
  { path: '', redirectTo: '/property-binding', pathMatch: 'full' },
  { path: 'start', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
];

@NgModule({
  declarations: [HomeComponent, PropertyBindingComponent],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
