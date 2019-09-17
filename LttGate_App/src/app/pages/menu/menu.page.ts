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
    icon: 'clock'

  },  
  {   
     title:'الاجازات',
    url:'/menu/vacation',
    icon: 'list-box'

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
     this.router.navigate(['']);
  }

}
