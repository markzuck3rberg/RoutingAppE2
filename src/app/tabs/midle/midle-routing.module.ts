import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidlePage } from './midle.page';

const routes: Routes = [
  {
    path: '',
    component: MidlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidlePageRoutingModule {}
