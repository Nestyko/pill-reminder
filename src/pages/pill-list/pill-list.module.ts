import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PillListPage } from './pill-list';

@NgModule({
  declarations: [
    PillListPage,
  ],
  imports: [
    IonicPageModule.forChild(PillListPage),
  ],
  exports: [
    PillListPage
  ]
})
export class PillListPageModule {}
