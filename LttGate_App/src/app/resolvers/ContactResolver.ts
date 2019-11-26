import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
 
import { Contact } from '../models/Contact';
import { ContactserviceService } from '../services/Contactservice.service';
import { Observable , of} from 'rxjs';
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
@Injectable()

export class ContactResolver implements Resolve<Contact[]>{
    pageNumber = 1;
    pageSize = 30;
    constructor( private contactserviceService: ContactserviceService ,private http: HttpClient,private router:Router ){}
    // resolve(route: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Contact[] | import("rxjs").Observable<Contact[]> | Promise<Contact[]> {
    //     throw new Error("Method not implemented.");
    // }
    resolve(route:ActivatedRouteSnapshot):Observable<Contact[]>{

        return this.contactserviceService.getUsers(this.pageNumber,this.pageSize).pipe(
          catchError(error => {
               this.router.navigate(['']);
              return of(null);
          })  
        )
    }
}
