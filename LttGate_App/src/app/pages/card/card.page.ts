import { Component, OnInit } from '@angular/core';
  import {   NavController, LoadingController } from '@ionic/angular';
 import { HttpClient, HttpParams } from '@angular/common/http';
  import { PaginationResult, Pagination } from 'src/app/models/Pagination';
 import { ActivatedRoute } from '@angular/router';
 import { DatePipe } from '@angular/common';
import { Card } from 'src/app/models/Card';
import { CardService } from 'src/app/services/Card.service';
import { LoadingService } from 'src/app/services/Loading.service';
 
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  acssess:Card[];
  page = 1;
   pagination: Pagination;
  constructor(private load:LoadingService ,public datepipe: DatePipe , public loadingController: LoadingController ,public navCtrl: NavController,private route: ActivatedRoute,
    private cardService: CardService ,private http: HttpClient   ) { }



  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.acssess = data['card'].result;
        this.pagination = data['card'].pagination;
        
      } )
      this.load.dismiss();

  }

  loadContacts(infiniteScroll?) {
    this.cardService.getAcssess(this.page, this.pagination.itemsPerPage)
    .subscribe((res: PaginationResult<Card[]>) => {
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

