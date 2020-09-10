import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  cusName : string;
  //cusId : number;
  customer : Observable<Customer>;
  cust:Customer;
  
  constructor(private _customerService: CustomerService) {
    this.cust = {"cusId":3,"cusName":"Renu Srivastav","cusPhno":"8755144556","cusUserName":null,"cusPassword":null,"cusEmail":"renusan@gmmail.com"};

    //alert(localStorage.getItem("user"));
    this._customerService.findByCustomerName(localStorage.getItem("user")).subscribe(x => {
      this.cust=x;
      localStorage.setItem('customer', JSON.stringify(x));
    });
   }

  ngOnInit(): void {
    this._customerService.findByCustomerName(localStorage.getItem("user"));
  }

}
