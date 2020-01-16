import { Component, OnInit } from '@angular/core';
import { LogDate } from 'src/app/models/LogDate';
import { Pagination, PaginationResult } from 'src/app/models/Pagination';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { LogDataVactionService } from 'src/app/services/LogDataVaction.service';
import { LoadingService } from 'src/app/services/Loading.service';

@Component({
  selector: 'app-logefvaction',
  templateUrl: './logefvaction.page.html',
  styleUrls: ['./logefvaction.page.scss'],
})
export class LogefvactionPage implements OnInit {
  logdata: LogDate[];
  page = 1;
  pagination: Pagination;
  constructor(private load:LoadingService ,public datepipe: DatePipe,private logDataVactionService:LogDataVactionService, public loadingController: LoadingController, public navCtrl: NavController
    , private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.logdata = data['logef'].result;
        this.pagination = data['logef'].pagination;

      })
              this.load.dismiss();

  }

  loadContacts(infiniteScroll?) {
    this.logDataVactionService.getLogdataEFvaction(this.page, this.pagination.itemsPerPage)
    .subscribe((res: PaginationResult<LogDate[]>) => {
      this.logdata = this.logdata.concat(res.result)  ;
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
