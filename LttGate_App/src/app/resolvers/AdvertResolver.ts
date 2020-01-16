 
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
 
import { Contact } from '../models/Contact';
import { ContactserviceService } from '../services/Contactservice.service';
import { Observable , of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { Advert } from '../models/Advert';
import { AdvertService } from '../services/Advert.service';
import { LoadingService } from '../services/Loading.service';
@Injectable()

export class AdvertResolver implements Resolve<Advert[]>{
    pageNumber = 1;
    pageSize = 6;
    constructor(private load:LoadingService , private advertService: AdvertService ,private http: HttpClient,private router:Router ){}
 
    resolve(route:ActivatedRouteSnapshot):Observable<Advert[]>{
        this.load.present();

        return this.advertService.getAdvert(this.pageNumber,this.pageSize).pipe(
          catchError(error => {
            this.load.dismiss();

               this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}
