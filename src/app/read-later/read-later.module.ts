import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadLaterPageRoutingModule } from './read-later-routing.module';

import { ReadLaterPage } from './read-later.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadLaterPageRoutingModule
  ],
  declarations: [ReadLaterPage]
})
export class ReadLaterPageModule {}
