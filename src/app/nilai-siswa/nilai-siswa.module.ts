import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NilaiSiswaPageRoutingModule } from './nilai-siswa-routing.module';

import { NilaiSiswaPage } from './nilai-siswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NilaiSiswaPageRoutingModule
  ],
  declarations: [NilaiSiswaPage]
})
export class NilaiSiswaPageModule {}
