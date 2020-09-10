import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Menu} from './menu';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http:Http) { }

  searchMenu(menId : number) : Observable<Menu>{
    return this._http.get("http://localhost:8080/Canteen/webapi/menu/searchmenu/"+menId).
    map((res : Response)=> res.json());
}
showMenu() : Observable<Menu[]>{
  return this._http.get("http://localhost:8080/Canteen/webapi/menu").
  map((res : Response)=> res.json());
}
}
