import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NilaiSiswaPage } from './nilai-siswa.page';

const routes: Routes = [
  {
    path: '',
    component: NilaiSiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NilaiSiswaPageRoutingModule {}
