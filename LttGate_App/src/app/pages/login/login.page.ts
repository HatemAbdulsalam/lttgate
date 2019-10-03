import { Component, OnInit } from '@angular/core';
import {     AuthService } from 'src/app/services/AuthService.service';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  model : any={} ;
  constructor(private authService : AuthService , public alertController: AlertController , private router: Router) { }
  username: string ='';
  password: string ='';
  showPwd: boolean = false;
  passwordType:string = 'password';
  iconname:string = 'eye';

  ngOnInit() {
    this.showPwd = false;
    if(this.authService.loggedIn())
    {    
      
    }
  }
  login(){
    if (navigator.onLine) {
      this.authService.login(this.model).subscribe(
        next=>{ this.presentAlert('تم الدخول بنجاح') ;
          } ,
        error=>{this.presentAlert(error)} ,
        ()=> {this.router.navigate(['/menu/home'])}
      )      } else{
        this.presentAlert(' لا يوجد اتصال بالانترنت') ;
      }


  }
  loggedIn(){
  //  const token = localStorage.getItem('token');
  //  return !! token;
     return this.authService.loggedIn();
  }

  togglepassword(){
if(this.showPwd)
{
  this.showPwd= false;
  this.passwordType = 'password';
  this.iconname = 'eye';
}
else{
  this.showPwd= true;
  this.passwordType = 'text';
  this.iconname = 'eye-off';
}
  }
 
  async presentAlert(Message : string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'تسجيل الدخول',
      message:   Message,
      buttons: ['OK']
    });

    

    await alert.present();
  }

   
}   
