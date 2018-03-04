import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NouveauClientPage } from './nouveau-client';

@NgModule({
  declarations: [
    NouveauClientPage,
  ],
  imports: [
    IonicPageModule.forChild(NouveauClientPage),
  ],
})
export class NouveauClientPageModule {}
