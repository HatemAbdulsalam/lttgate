import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { ContactResolver } from 'src/app/resolvers/ContactResolver';
import { VactionResolver } from 'src/app/resolvers/VactionResolver';
import { AdvertResolver } from 'src/app/resolvers/AdvertResolver';
import { AcssessResolver } from 'src/app/resolvers/AcssessResolver';
import { HomeResolver } from 'src/app/resolvers/HomeResolver';
import { LogDataVactionResolver } from 'src/app/resolvers/LogDataVactionResolver';
import { LogDataEFVactionResolver } from 'src/app/resolvers/LogDataEFVactionResolver';
import { CardResolver } from 'src/app/resolvers/CardResolver';
 
 
const routes: Routes = [
  
  {
    path: '',
    component: MenuPage,
    children:[

   { path: "attendance",  loadChildren: '../attendance/attendance.module#AttendancePageModule',resolve:{acssess:  AcssessResolver } },
   { path: 'home', loadChildren: '../home/home.module#HomePageModule',resolve:{home:  HomeResolver } },
   { path: 'vacation', loadChildren: '../vacation/vacation.module#VacationPageModule',resolve:{vaction:  VactionResolver } },
   { path: 'logvaction', loadChildren: '../logvaction/logvaction.module#LogvactionPageModule',resolve:{log:  LogDataVactionResolver } },
   { path: 'logefvaction', loadChildren: '../logefvaction/logefvaction.module#LogefvactionPageModule',resolve:{logef:  LogDataEFVactionResolver } },
   { path: 'advert', loadChildren: '../advert/advert.module#AdvertPageModule' ,resolve:{advert:  AdvertResolver }},
   { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule',resolve:{contact:  ContactResolver }},
   { path: 'contact-us', loadChildren: '../contact-us/contact-us.module#ContactUsPageModule' },
   { path: 'card', loadChildren: '../card/card.module#CardPageModule',resolve:{card:  CardResolver }},

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
