import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePillPage } from './create-pill';

@NgModule({
  declarations: [
    CreatePillPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePillPage),
  ],
  exports: [
    CreatePillPage
  ]
})
export class CreatePillPageModule {}
