import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private _router:Router) { }
  orderhistory(){
    this._router.navigate(['/vendor-order-history']);
  }
  vorderhistory(){
    this._router.navigate(['/vendor-pending-history']);
  }
  accept(){
    this._router.navigate(['/vendor-accept-reject']);
  }

  ngOnInit(): void {
  }

}
