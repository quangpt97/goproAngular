import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Page01Component} from './pages/page01/page01.component';
import {Page02Component} from './pages/page02/page02.component';
import {Page03Component} from './pages/page03/page03.component';
import {Page04Component} from './pages/page04/page04.component';
import {Page05Component} from './pages/page05/page05.component';
const routes: Routes = [
  {
    path: 'page01',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page02Component
  },
  {
    path: 'page03',
    component: Page03Component
  },
  {
    path: 'page04',
    component: Page04Component
  },
  {
    path: 'page05',
    component: Page05Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
