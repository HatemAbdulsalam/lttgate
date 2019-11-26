import { Component, OnInit } from '@angular/core';  
import { Observable } from 'rxjs';  
import {  AcssessDataService } from '../../services/acssess-data.service';
 import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
 import { map } from 'rxjs/operators';  
import { LogData } from '../../LogData';
 import { AuthService } from '../../services/AuthService.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { EmployeeViewModel } from 'src/app/models/EmployeeViewModel';
 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  AccessLog:EmployeeViewModel;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.AccessLog = data['home'];
         
      } )
  }

  
  }
    
 
   
   
  
  
 