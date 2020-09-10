import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Vendor } from './vendor';
import { Orders } from './orders';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private _http : HttpClient) { }
  validateVendor(user : string, pwd : string) : Observable<string> {
    return this._http.get("http://localhost:8080/Canteen/webapi/vendor/validate/"+user+"/"+pwd).
    map((res : Response) => res.text());
  }
  findByVendorName(user : string) : Observable<Vendor> {
    return this._http.get("http://localhost:8080/Canteen/webapi/vendor/searchVendor/"+user).
    map((res : Response) => res.json());
  }
  findVendorName(user : string){
    return this._http.get("http://localhost:8080/Canteen/webapi/vendor/searchVendor/"+user).
    map((res : Response) => res.json());
  }
  orderHistory(vendId : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/Canteen/webapi/orders/vendor/"+vendId).
    map((res : Response) => res.json());
}
pendingHistory(vendId : number) : Observable<Orders[]> {
  return this._http.get("http://localhost:8080/Canteen/webapi/orders/vendorpending/"+vendId).
  map((res : Response) => res.json());
}
  searchVendor(venName : number) : Observable<Vendor>{
    return this._http.get("http://localhost:8080/Canteen/webapi/vendor/searchVendor/"+venName).
    map((res : Response)=> res.json());
}
showVendor() : Observable<Vendor[]>{
  return this._http.get("http://localhost:8080/Canteen/webapi/vendor").
  map((res : Response)=> res.json());
}
acceptOrReject(ordId : number, vendId : number, ordstatus : String) : Observable<string> {
  return this._http.post("http://localhost:8080/Canteen/webapi/orders/acceptOrRejectOrder/"+ordId + "/" + vendId + "/" +ordstatus,null).
  map((res : Response) => res.text());
}
}
