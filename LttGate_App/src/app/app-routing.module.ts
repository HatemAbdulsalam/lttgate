import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

    { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
    {path: 'menu',   loadChildren: './pages/menu/menu.module#MenuPageModule' , canActivate:[AuthGuard]},
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  
  // { path: '', runGuardsAndResolvers:'always', canActivate:[AuthGuard],children:[
  //   { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  //  ,
  //   { path: 'attendance', loadChildren: './pages/attendance/attendance.module#AttendancePageModule' },
  //   { path: 'vacation', loadChildren: './pages/vacation/vacation.module#VacationPageModule' },
  
  //  ]}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
