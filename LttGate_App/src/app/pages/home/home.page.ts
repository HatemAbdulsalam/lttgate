import { Component, OnInit } from '@angular/core';  
import { Observable } from 'rxjs';  
import {  AcssessDataService } from '../../services/acssess-data.service';
 import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
 import { map } from 'rxjs/operators';  
import { LogData } from '../../LogData';
import { AccessLog } from '../../AccessLog';
import { AuthService } from '../../services/AuthService.service';
import { environment } from 'src/environments/environment';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{




  AccessLog:any;



  constructor(private AcssessData : AcssessDataService, private authService : AuthService , private http: HttpClient) {}
  ngOnInit() {   
    this.authService.decodedToken =this.authService.jwtHelper.decodeToken(localStorage.getItem('token'));
     this.loadData()

   }
 loadData(){
  this.http.get(environment.apiurl+'home/'+ this.authService.decodedToken.nameid ).subscribe(
      response => {
      this.AccessLog =response;
   },
   error =>{console.log(error);}

    ) 
 } 
  }
    
 
   
   
  
  
 