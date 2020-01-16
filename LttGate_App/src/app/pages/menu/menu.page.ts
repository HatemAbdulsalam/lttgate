import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
pages = [
  {   
    title:'الرئيسية',
    url:'/menu/home',
    icon: 'home'
 },
  {
    title:'الحضور والانصراف',
    url:'/menu/attendance',
    icon: 'finger-print'
   },  
  {
    title:'البوابة الإلكترونية',
    url:'/menu/card',
    icon: 'card'
   }  ,
  {   
     title:'رصيد الاجازات',
    url:'/menu/vacation',
    icon: 'list-box'

  }   ,
  {
    title:'إعلانات الشركة',
    url:'/menu/advert',
    icon: 'megaphone'
   }, 
  {
    title:'سجل الاجازات الطارئة',
    url:'/menu/logefvaction',
    icon: 'paper'
   },  
  {
    title:'سجل الاجازات السنوية',
    url:'/menu/logvaction',
    icon: 'paper'

  }, 
  {
    title:'هواتف الشركة',
    url:'/menu/contact',
    icon: 'contacts'
   }  ,
   {
    title:'عن التطبيق',
    url:'/menu/contact-us',
    icon: 'information-circle'
   }   
  
 ];
selectpath = '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      this.selectpath = event.url;
    }
    );
  }

  ngOnInit() {
  }

  loggedOut(){
    localStorage.removeItem('token');
    // this.alertify.message('تم الخروج');
     this.router.navigate(['login']);
  }

}
