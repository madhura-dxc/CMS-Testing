import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import 'rxjs/add/operator/map';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http : Http) { }

  validateCustomer(user:string,pwd:string): Observable<string>{
    return this._http.get("http://localhost:8080/Canteen/webapi/customer/validate/"+user+"/"+pwd)
    .map((res :Response)=>res.text());
  }

  findByCustomerName(user : string) : Observable<Customer> {
    return this._http.get("http://localhost:8080/Canteen/webapi/customer/searchcustomerByName/"+user).
    map((res : Response) => res.json());
  }

  orderHistory(cusId : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/Canteen/webapi/orders/customer/"+cusId).
    map((res : Response) => res.json());
  }

  pendingHistory(cusId : number) : Observable<Orders[]> {
    return this._http.get("http://localhost:8080/Canteen/webapi/orders/customerpending/"+cusId).
    map((res : Response) => res.json());
  }

  placeOrder(orders : Orders) : Observable<string> {
    return this._http.post("http://localhost:8080/Canteen/webapi/orders/placeorder",orders).
    map((res : Response) => res.text());
  }
  cancelOrder(ordId : number, cusId : number, status : String,) : Observable<string> {
    return this._http.post("http://localhost:8080/Canteen/webapi/orders/cancelOrder/"+ordId + "/" +cusId+ "/" +status,null).
    map((res : Response) => res.text());
  }


}
