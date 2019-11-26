import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {  Observable } from 'rxjs';
 import { PaginationResult, Pagination } from 'src/app/models/Pagination';
import { ContactserviceService } from 'src/app/services/Contactservice.service';
import { ActivatedRoute } from '@angular/router';
import { Acssess } from 'src/app/models/Acssess';
import { DatePipe } from '@angular/common';
import { AcssessService } from 'src/app/services/Acssess.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  acssess:Acssess[];
  page = 1;
   pagination: Pagination;
   constructor(public datepipe: DatePipe , public loadingController: LoadingController ,public navCtrl: NavController,private route: ActivatedRoute,
    private acssessService: AcssessService ,private http: HttpClient   ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.acssess = data['acssess'].result;
        this.pagination = data['acssess'].pagination;
        
      } )
  }
  loadContacts(infiniteScroll?) {
    this.acssessService.getAcssess(this.page, this.pagination.itemsPerPage)
    .subscribe((res: PaginationResult<Acssess[]>) => {
      this.acssess = this.acssess.concat(res.result)  ;
      this.pagination = res.pagination;
      this.doInfinite(infiniteScroll)

    })
  }
  doInfinite(infiniteScrollEvent) {
     infiniteScrollEvent.target.complete();
  }
  loadMore(infiniteScroll) {
     
    this.page = this.pagination.currentPage + 1;
    this.loadContacts(infiniteScroll);
   
  }
}
