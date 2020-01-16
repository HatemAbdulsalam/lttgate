import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(private appVersion: AppVersion) { }
  AppName : string;
  PackageName : string;
  VersionNumber:string;
  VersionCode  : string | number;

  ngOnInit() {

    this.appVersion.getVersionNumber().then(
      (versionNumber) => {
        this.VersionNumber = versionNumber;
      },
      (error) => {
        console.log(error);
      });

    this.appVersion.getAppName().then(
      (versionNumber) => {
        this.AppName = versionNumber;
      },
      (error) => {
        console.log(error);
      });

      this.appVersion.getVersionCode().then(
        (versionCode) => {
          this.VersionCode = versionCode;
        },
        (error) => {
          console.log(error);
        });
  }

}
