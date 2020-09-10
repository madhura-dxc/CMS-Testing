import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Wallet} from './wallet';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private _http:Http) { }

  showByWalletCustomerId(cusId : number) : Observable<Wallet[]>{
    return this._http.get("http://localhost:8080/Canteen/webapi/walllet/"+cusId).
    map((res : Response)=> res.json());
}
  showWallet() : Observable<Wallet[]>{
    return this._http.get("http://localhost:8080/MLP173/api/wallet").
    map((res : Response)=> res.json());
}
}
