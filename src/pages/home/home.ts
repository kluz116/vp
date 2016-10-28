import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomeService } from './homeService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[HomeService]
})
export class HomePage {

     app_parish:any;
    firstname:string;
    lastname:string;
    gender:string;
    language:string;
    phone:string;
    altPhone:number;
    nok:string;
    NokPhone:string;
    district:string;
    subcounty:string;
    parish:string;
    postMyClientToServer:string;
    app_response='Successfuly added';
    languages:any;
    app_subcounty:any;
    districts:string;

  constructor(  private homeservice:HomeService, public navCtrl: NavController) {
    this.homeservice.getFeed().subscribe(app_parish=>{
      this.app_parish=app_parish;
    });
    this.homeservice.getSubcounty().subscribe(app_subcounty=>{
      this.app_subcounty=app_subcounty;
    });

    this.homeservice.getLangauge().subscribe(languages=>{
      this.languages = languages;
    });
    this.homeservice.getDistrict().subscribe(districts=>{
      this.districts = districts;
    });
   }
     postDataToServer (){
        this.homeservice.postClientsData(this.firstname,this.lastname,this.gender,this.language,this.phone,this.altPhone,this.nok,this.NokPhone,this.district,this.subcounty,this.parish).subscribe(//call the post
                data => this.postMyClientToServer = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
    }

}
