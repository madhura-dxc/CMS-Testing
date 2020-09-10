import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { Menu } from '../menu';
import { Vendor } from '../vendor';
import { Wallet } from '../wallet';
import { MenuService } from '../menu.service';
import { WalletService } from '../wallet.service';
import { VendorService } from '../vendor.service';
import { CustomerService } from '../customer.service';
import { Orders } from '../orders';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  customer : Customer;
  menuList : Observable<Menu[]>
  vendorList : Observable<Vendor[]>;
  walletList : Observable<Wallet[]>;
  result : string;
  menuFound : Menu;
  price : number;
  constructor(private _menuService:MenuService, private _walletService:WalletService, private _vendorService:VendorService,private _customerService:CustomerService,private router:Router) {
    this.customer = localStorage.getItem('customer')? JSON.parse(localStorage.getItem('customer')):[];
    this.model.cusId=this.customer.cusId;
    this.menuList = _menuService.showMenu();
    this.vendorList = _vendorService.showVendor();
    this.walletList=_walletService.showByWalletCustomerId(this.customer.cusId);
    this.menu.menItem="FISH";
   }
   showAmount() {
    let menId : number;
    menId=parseInt(this.menu.menItem);
    this._menuService.searchMenu(menId).subscribe(x => {
      this.menuFound = x;
      this.price=x.menPrice;
    });
    // this.price = this.menuFound.menPrice;
   }
   placeOrder() {
    
    // alert(this.model.cusId);
    // alert(this.menu.foodName);
    // alert(this.vendor.venName);
    // alert(this.menuFound.foodPrice);
    this.model.menId=parseInt(this.menu.menItem);
    this.model.venId=parseInt(this.vendor.venName);
    this.model.wallsource = this.wallet.wallsource;
    this._customerService.placeOrder(this.model).subscribe(x => {
      this.result = x;
    })
   }

   menue(){
    this.router.navigate(['/dashboard']);
  }

   model = new Orders();
   menu = new Menu();
   vendor = new Vendor();
   wallet = new Wallet();
  ngOnInit(): void {
  }

}
