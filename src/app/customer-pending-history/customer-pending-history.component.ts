import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { Orders } from '../orders';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-pending-history',
  templateUrl: './customer-pending-history.component.html',
  styleUrls: ['./customer-pending-history.component.css']
})
export class CustomerPendingHistoryComponent implements OnInit {

  customer:Customer;
  orders:Observable<Orders[]>;
  cusId:number;
  selValue : number;
  values : string;
  filter : string[];
  feature = 'Feature 1'
  arr : [];
  result : string;
  status : string;
  selectedFeatures: any = [];

  constructor(private _router:Router, private _customerService:CustomerService,private _route : ActivatedRoute) { 
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):[];
    //alert("Customer Id is " +this.customer.cusId);
    this.orders = this._customerService.pendingHistory(this.customer.cusId);
  }
  cancelOrder(ordId, cusId) {
    //alert(ordId);
    //alert(cusId);
    localStorage.setItem("cancelOrderId",ordId);
    localStorage.setItem("cancelCustId", cusId);
    this._router.navigate(['../cancel-order'], {relativeTo: this._route});
  }
  checkIfAllSelected(x) {
    this.selectedFeatures.push(x);
    // alert("added");
  }
  cancelMe() {
    this.values = this.selectedFeatures.toString();
    // alert(this.values);
    this.filter = this.values.split(",");
    this.status="PENDING";
    for(var v=0;v<this.filter.length;v++) {
      alert(this.filter[v]);
      this._customerService.cancelOrder(parseInt(this.filter[v]),this.customer.cusId,this.status).subscribe(x => {
        this.result=x;
      })
    }
    alert("Selected Orders Cancelled Successfully...");
    this._router.navigate(['/dashboard']);
    alert(this.customer.cusId);

  }

  ngOnInit(): void {
  }

}
