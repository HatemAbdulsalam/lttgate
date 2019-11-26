import { Component, OnInit } from '@angular/core';
import { LogDate } from 'src/app/models/LogDate';
import { Pagination } from 'src/app/models/Pagination';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-logefvaction',
  templateUrl: './logefvaction.page.html',
  styleUrls: ['./logefvaction.page.scss'],
})
export class LogefvactionPage implements OnInit {
  logdata: LogDate[];
  pagination: Pagination;
  constructor(public datepipe: DatePipe, public loadingController: LoadingController, public navCtrl: NavController
    , private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.logdata = data['logef'].result;
        this.pagination = data['logef'].pagination;

      })
  }
}
