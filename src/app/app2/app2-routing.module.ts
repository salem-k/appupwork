import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { App2Page } from './app2.page';

const routes: Routes = [
  {
    path: '',
    component: App2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class App2PageRoutingModule {}
