import { Component, OnInit, ApplicationRef } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService.service';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { LoadingService } from 'src/app/services/Loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  model: any = {
    username:'',
    password:''
  };
  constructor(private load:LoadingService ,private appReference: ApplicationRef,private authService: AuthService, public network: Network, public alertController: AlertController, private router: Router) {

    this.network.onConnect().subscribe(() => {


    });

  }
  username: string = '';
  password: string = '';
  showPwd: boolean = false;
  passwordType: string = 'password';
  iconname: string = 'eye';
concted:boolean  = true;
  ngOnInit() {

   
  

    this.showPwd = false;
    if (this.authService.loggedIn()) {

    }
  }
  login() {
   
    if(this.model.username == "" || this.model.password == "" ){
      this.presentAlert('قم بادخال اسم المستخدم وكلمة المرور');
      return;


    }
    this.authService.login(this.model).subscribe(
      next => {
        this.load.dismiss(),
        this.presentAlert('تم الدخول بنجاح');
      },
 
      error => {     
          this.load.dismiss();
        this.presentAlert('خطأ في تسجيل الدخول') },
      () => { this.router.navigate(['/menu/home']) 
    }
    )



  }
  loggedIn() {
    //  const token = localStorage.getItem('token');
    //  return !! token;
    return this.authService.loggedIn();
  }

  togglepassword() {
    if (this.showPwd) {
      this.showPwd = false;
      this.passwordType = 'password';
      this.iconname = 'eye';
    }
    else {
      this.showPwd = true;
      this.passwordType = 'text';
      this.iconname = 'eye-off';
    }
  }

  async presentAlert(Message: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'تسجيل الدخول',
      message: Message,
      buttons: ['OK']
    });



    await alert.present();
  }

  


}   
