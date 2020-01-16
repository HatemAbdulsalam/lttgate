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
import { AdvertService } from 'src/app/services/Advert.service';
import { Advert } from 'src/app/models/Advert';
import { DatePipe } from '@angular/common'
import { LoadingService } from 'src/app/services/Loading.service';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.page.html',
  styleUrls: ['./advert.page.scss'],
})
export class AdvertPage implements OnInit {
  advert:Advert[];
  page = 1;
   pagination: Pagination;
  constructor(private load:LoadingService ,public datepipe: DatePipe , public loadingController: LoadingController ,public navCtrl: NavController,private route: ActivatedRoute,private advertService: AdvertService ,private http: HttpClient   ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.advert = data['advert'].result;
        this.pagination = data['advert'].pagination;
      } )
      this.load.dismiss();

  }
  loadAdvert(infiniteScroll?) {


    this.advertService.getAdvert(this.page, this.pagination.itemsPerPage)
    .subscribe((res: PaginationResult<Advert[]>) => {
      this.advert = this.advert.concat(res.result)  ;
      this.pagination = res.pagination;
      this.doInfinite(infiniteScroll)

    })
  }
  doInfinite(infiniteScrollEvent) {
     infiniteScrollEvent.target.complete();
  }
  loadMore(infiniteScroll) {
 
    this.page = this.pagination.currentPage + 1;
    this.loadAdvert(infiniteScroll);
   
  }

}
