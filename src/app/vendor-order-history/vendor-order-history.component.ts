import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-order-history',
  templateUrl: './vendor-order-history.component.html',
  styleUrls: ['./vendor-order-history.component.css']
})
export class VendorOrderHistoryComponent implements OnInit {

  vendorName : string;
  venId : number;
  vendor : Vendor;
  orders : Observable<Orders[]>;
  constructor(private _vendorService:VendorService,private _router:Router) {
    this.vendor = localStorage.getItem('vendor')? JSON.parse(localStorage.getItem('vendor')):[];
   // alert("vendor Id is " +this.vendor.venId);
   this.orders=this._vendorService.orderHistory(this.vendor.venId);
   }

  ngOnInit(): void {
  }

  menu(){
    this._router.navigate(['/vendor-dashboard'])
  }

}
