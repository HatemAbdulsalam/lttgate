import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
 
 
const routes: Routes = [
  
  {
    path: '',
    component: MenuPage,
    children:[
   
   
          {
            path: "attendance",
            loadChildren: '../attendance/attendance.module#AttendancePageModule'
          },
         
 
  { path: 'home', loadChildren: '../home/home.module#HomePageModule' },

   { path: 'vacation', loadChildren: '../vacation/vacation.module#VacationPageModule' }

    ]
  }
];

@NgModule({  
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    RouterModule.forChild(routes)
  ],
   declarations: [MenuPage]
})
export class MenuPageModule {}
