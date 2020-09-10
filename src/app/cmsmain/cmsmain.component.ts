import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmsmain',
  templateUrl: './cmsmain.component.html',
  styleUrls: ['./cmsmain.component.css']
})
export class CMSMainComponent implements OnInit {

  constructor(private _router:Router) { }

  login(){
    this._router.navigate(['/customer-login']);
  }

  vlogin(){
    this._router.navigate(['/vendor-login']);
  }

  ngOnInit(): void {
  }

}
