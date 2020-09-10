import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  cusUserName:string;
  constructor(private _router:Router) {
    this.cusUserName = localStorage.getItem("cusName");
   }
/* 
   orderhistory(){
    this._router.navigate(['/customer-order-history']);
   } */

   /* orderhistorypending(){
    this._router.navigate(['/customer-pending-order']);
   }

   placeOrder(){
    this._router.navigate(['/place-order']);
   }

   logout(){
    this._router.navigate(['/logout']);
   }

   cancelOrder(){
    this._router.navigate(['/cancel-order']);
   } */
  ngOnInit(): void {
  }

}
