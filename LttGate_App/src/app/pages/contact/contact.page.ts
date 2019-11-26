import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { PaginationResult, Pagination } from 'src/app/models/Pagination';
import { ContactserviceService } from 'src/app/services/Contactservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact:Contact[];
  page = 1;
   pagination: Pagination;
   searchTerm: string;
   searching:boolean = false;

   constructor(public loadingController: LoadingController ,public navCtrl: NavController,private route: ActivatedRoute,private contactserviceService: ContactserviceService ,private http: HttpClient , private callnumber:CallNumber , private sms:SMS , tostcontroller:ToastController) { }

  ngOnInit() {
     this.route.data.subscribe(
      data => {
        this.contact = data['contact'].result;
        this.pagination = data['contact'].pagination;
        
      } )
     }

      async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: "bubbles",
          duration: 1000,
          message: 'جاري التحميل...',
          translucent: true,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
      }
    
      searchChanged() {
        this.searching = true;
if(this.searchTerm === "")
{
  this.page=1;
  this.contact =  [];
  this.searching = false;

  this.loadContacts();
  return;
}
        this.contactserviceService.getUsers(1, this.pagination.itemsPerPage , this.searchTerm )
        .subscribe((res: PaginationResult<Contact[]>) => {
          this.contact = res.result  ;
          this.pagination = res.pagination;
 
        })

      }
      loadContacts(infiniteScroll?) {
        this.contactserviceService.getUsers(this.page, this.pagination.itemsPerPage)
        .subscribe((res: PaginationResult<Contact[]>) => {
          this.contact = this.contact.concat(res.result)  ;
          this.pagination = res.pagination;
          this.doInfinite(infiniteScroll)

        })
      }
      doInfinite(infiniteScrollEvent) {
         infiniteScrollEvent.target.complete();
      }
      loadMore(infiniteScroll) {
        if(this.searching )
        {
          this.doInfinite(infiniteScroll)
          return;
        }
        this.page = this.pagination.currentPage + 1;
        this.loadContacts(infiniteScroll);
       
      }

  

  call(tel:any)
  {
    this.callnumber.callNumber(tel.moblie,true);
  }
 

 

}
 