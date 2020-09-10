import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-order-history',
  templateUrl: './customer-order-history.component.html',
  styleUrls: ['./customer-order-history.component.css']
})
export class CustomerOrderHistoryComponent implements OnInit {


  customername:string;
  cusId:number;
  customer:Customer;
  orders:Observable<Orders[]>;

  constructor(private  _customerService:CustomerService, private router:Router) {
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):[];
    //alert("Customer Id is " +this.customer.cusId);
    this.orders=this._customerService.orderHistory(this.customer.cusId);
   }

   menu(){
     this.router.navigate(['/dashboard']);
   }

  ngOnInit(): void {
  }

}
