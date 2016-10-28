import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
private sub_county_url = 'http://villagepower.info/app/app_subcounty.php';
private district_url = 'http://villagepower.info/app/app_district.php';
private url = 'http://villagepower.info/app/app_parish.php';
private client_url = 'http://villagepower.info/app_clients.php';
private url_language = 'http://villagepower.info/language.php';


  constructor(private http:Http) {

   }

   getFeed(){
    return this.http.get(this.url)
       .map(response=>response.json());
   }
   getLangauge(){
       return this.http.get(this.url_language).map(res=>res.json());
   }
    getSubcounty(){
       return this.http.get(this.sub_county_url).map(res=>res.json());
   }
       getDistrict(){
       return this.http.get(this.district_url).map(res=>res.json());
   }
   postClientsData(firstname:string,lastname:string,gender:string,language:string,phone:string,altPhone:number,nok:string,NokPhone:string,district:string,subcounty:string,parish:string){
        let body = JSON.stringify({ "firstname":firstname,"lastname":lastname,"gender":gender,"language":language,"phone": phone,"altPhone":altPhone,"nok":nok,"NokPhone":NokPhone,"district":district,"subcounty":subcounty,"parish":parish});
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this.http.post(this.client_url,body,options)
           .map(res=>res.json())
           .catch(this.handleError);
   }
   private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
