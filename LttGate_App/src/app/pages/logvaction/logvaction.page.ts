import { Component, OnInit } from '@angular/core';
import { Pagination, PaginationResult } from 'src/app/models/Pagination';
import { DatePipe } from '@angular/common';
import { LoadingController, NavController } from '@ionic/angular';
import { LogDataVactionService } from 'src/app/services/LogDataVaction.service';
import { LogDate } from 'src/app/models/LogDate';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/Loading.service';


@Component({
  selector: 'app-logvaction',
  templateUrl: './logvaction.page.html',
  styleUrls: ['./logvaction.page.scss'],
})

export class LogvactionPage implements OnInit {
  logdata:LogDate[];
  page = 1;
   pagination: Pagination;
   constructor(private load:LoadingService ,public datepipe: DatePipe , public loadingController: LoadingController ,public navCtrl: NavController
    ,private route: ActivatedRoute,
    private logDataVactionService: LogDataVactionService    ) { }

    ngOnInit() {
      this.route.data.subscribe(
        data => {
          this.logdata = data['log'].result;
          this.pagination = data['log'].pagination;
          
        } )
        this.load.dismiss();

    }

    loadContacts(infiniteScroll?) {
      this.logDataVactionService.getLogdatavaction(this.page, this.pagination.itemsPerPage)
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
