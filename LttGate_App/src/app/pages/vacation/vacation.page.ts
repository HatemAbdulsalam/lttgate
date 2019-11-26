import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Vaction } from 'src/app/models/Vaction';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.page.html',
  styleUrls: ['./vacation.page.scss'],
})
export class VacationPage implements OnInit {
vaction:Vaction
  constructor(public loadingController: LoadingController ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.vaction = data['vaction'];
         
      } )
  }

}
