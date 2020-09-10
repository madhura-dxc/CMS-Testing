import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-accept-and-reject',
  templateUrl: './vendor-accept-and-reject.component.html',
  styleUrls: ['./vendor-accept-and-reject.component.css']
})
export class VendorAcceptAndRejectComponent implements OnInit {

  venId:number;
  ordId:number;
  ordStatus:string;
  result:string;

  constructor(private _vendorService:VendorService) {
    this.ordId=parseInt(localStorage.getItem("cancelOrderId"));
    this.venId=parseInt(localStorage.getItem("cancelVenId"));
   }

   acceptOrReject(){
    this._vendorService.acceptOrReject(this.ordId,this.venId,this.ordStatus).subscribe(x => {
      this.result=x;
    })
   }

  ngOnInit(): void {
  }

}
