import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { App2PageRoutingModule } from './app2-routing.module';

import { App2Page } from './app2.page';
import { IosCalculatorComponent } from '../ios-calculator/ios-calculator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    App2PageRoutingModule
  ],
  declarations: [App2Page,IosCalculatorComponent]
})
export class App2PageModule {}
