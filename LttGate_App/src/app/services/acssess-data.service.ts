import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  


import { Observable } from 'rxjs';  
 import { LogData } from '../LogData';
  import { AccessLog } from '../AccessLog';
 
@Injectable( )

export class AcssessDataService {
  url = 'http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }  
 

  getdata():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:5000/api/values");

  }
  
} 
 