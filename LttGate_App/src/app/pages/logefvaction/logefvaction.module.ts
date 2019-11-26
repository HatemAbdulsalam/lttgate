import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogefvactionPage } from './logefvaction.page';

const routes: Routes = [
  {
    path: '',
    component: LogefvactionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogefvactionPage]
})
export class LogefvactionPageModule {}
