import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-info',
  templateUrl: './vendor-info.component.html',
  styleUrls: ['./vendor-info.component.css']
})
export class VendorInfoComponent implements OnInit {

  vendorName : string;
  vendor : Observable<Vendor>;
  vend : Vendor;

  constructor(private _vendorService:VendorService) { 
     //alert(localStorage.getItem("user"));
    this._vendorService.findByVendorName(localStorage.getItem("user")).subscribe(x => {
      this.vend=x;
      //alert(this.vend.venId);
      localStorage.setItem('vendor', JSON.stringify(x));
    }); 
    
  }

  ngOnInit(): void {
    this.vendor = this._vendorService.findByVendorName(localStorage.getItem("user"));
    
  }

}
