import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Route[] = [{ path: '', component: HomeComponent }];

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
