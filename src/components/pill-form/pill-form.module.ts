import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PillFormComponent } from './pill-form';

@NgModule({
  declarations: [
    PillFormComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PillFormComponent
  ]
})
export class PillFormComponentModule {}
