import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdentificationClientPage } from './identification-client';

@NgModule({
  declarations: [
    IdentificationClientPage,
  ],
  imports: [
    IonicPageModule.forChild(IdentificationClientPage),
  ],
})
export class IdentificationClientPageModule {}
