import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-pending-history',
  templateUrl: './vendor-pending-history.component.html',
  styleUrls: ['./vendor-pending-history.component.css']
})
export class VendorPendingHistoryComponent implements OnInit {
  vendorName : string;
  venId : number;
  ordId : number;
  vendor : Vendor;
  orders : Observable<Orders[]>;
  selValue : number;
  values : string;
  filter : string[];
  feature = 'Feature 1'
  arr : [];
  rs : string;
  status : string;
  selectedFeatures: any = [];
  
  constructor(private _router:Router, private vendorService:VendorService) { 
    this.vendor = localStorage.getItem('vendor')? JSON.parse(localStorage.getItem('vendor')):[];
    //alert("Vendor Id is " +this.vendor.venId);
    this.orders=this.vendorService.pendingHistory(this.vendor.venId);
  }

  menu(){
    this._router.navigate(['/vendor-dashboard'])
  }

  ngOnInit(): void {
  }

}
