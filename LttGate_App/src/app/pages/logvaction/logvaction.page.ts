import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/models/Pagination';
import { DatePipe } from '@angular/common';
import { LoadingController, NavController } from '@ionic/angular';
import { LogDataVactionService } from 'src/app/services/LogDataVaction.service';
import { LogDate } from 'src/app/models/LogDate';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-logvaction',
  templateUrl: './logvaction.page.html',
  styleUrls: ['./logvaction.page.scss'],
})

export class LogvactionPage implements OnInit {
  logdata:LogDate[];
   pagination: Pagination;
   constructor(public datepipe: DatePipe , public loadingController: LoadingController ,public navCtrl: NavController
    ,private route: ActivatedRoute,
    private logDataVactionService: LogDataVactionService    ) { }

    ngOnInit() {
      this.route.data.subscribe(
        data => {
          this.logdata = data['log'].result;
          this.pagination = data['log'].pagination;
          
        } )
    }
}
