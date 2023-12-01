import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidlePageRoutingModule } from './midle-routing.module';

import { MidlePage } from './midle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidlePageRoutingModule
  ],
  declarations: [MidlePage]
})
export class MidlePageModule {}
