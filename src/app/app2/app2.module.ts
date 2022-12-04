import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { App2PageRoutingModule } from './app2-routing.module';

import { App2Page } from './app2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    App2PageRoutingModule
  ],
  declarations: [App2Page]
})
export class App2PageModule {}
