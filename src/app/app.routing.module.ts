import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './samples/interpolation/interpolation.component';

const routes: Route[] = [
  { path: '', redirectTo: '/interpolation', pathMatch: 'full' },
  { path: 'start', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
