import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/AuthService.service';
import { AlertController } from '@ionic/angular';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService : AuthService , public alertController: AlertController , private router: Router) { }

  canActivate( ):   boolean   {
    if(this.authService.loggedIn())
    {    return true;
    }
   this.router.navigate(['login']);
   return false;
  } 
}
