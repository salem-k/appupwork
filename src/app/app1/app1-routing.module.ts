import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { App1Page } from './app1.page';

const routes: Routes = [
  {
    path: '',
    component: App1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class App1PageRoutingModule {}
