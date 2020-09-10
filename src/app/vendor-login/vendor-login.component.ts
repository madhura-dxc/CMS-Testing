import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {


  venUsername:string;
  venPassword:string;
  vendor:Observable<Vendor>;
  count:number;

  constructor(private _vendorService:VendorService,private _router:Router) { 
    this.count =  0;
  }

  validate(){
    //alert(this.venUsername);
    //alert(this.venPassword);

    this._vendorService.validateVendor(this.venUsername,this.venPassword).subscribe( x => {
      if(x=="1") {
        localStorage.setItem("user",this.venUsername);
        //console.log("Customer Success" +x);
        alert("done");
        this._router.navigate(["/vendor-dashboard"]);
      } else {
        this.count++;
      }
      err => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
