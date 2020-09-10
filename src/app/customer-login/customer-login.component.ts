import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  cusUserName:string;
  cusPassword:string;
  customer:Observable<Customer>;
  count:number;



  constructor(private _customerService: CustomerService, private router: Router) {
    this.count =0;
   }

  validate(){
    //alert(this.cusUserName);
    //alert(this.cusPassword);

    this._customerService.validateCustomer(this.cusUserName,this.cusPassword).subscribe( x => {
      if(x=="1") {
        localStorage.setItem("user",this.cusUserName);
        //console.log("Customer Success" +x);
        //alert("done");
        this.router.navigate(["/dashboard"]);
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
