import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CMSMainComponent } from './cmsmain/cmsmain.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { CustomerPendingHistoryComponent } from './customer-pending-history/customer-pending-history.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { VendorOrderHistoryComponent } from './vendor-order-history/vendor-order-history.component';
import { VendorPendingHistoryComponent } from './vendor-pending-history/vendor-pending-history.component';
import { LogoutComponent } from './logout/logout.component';
import { VendorAcceptAndRejectComponent } from './vendor-accept-and-reject/vendor-accept-and-reject.component';
import { CustomerCancelOrderComponent } from './customer-cancel-order/customer-cancel-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CMSMainComponent,
    CustomerLoginComponent,
    DashBoardComponent,
    CustomerInfoComponent,
    CustomerOrderHistoryComponent,
    CustomerPendingHistoryComponent,
    PlaceOrderComponent,
    VendorLoginComponent,
    VendorDashboardComponent,
    VendorInfoComponent,
    VendorOrderHistoryComponent,
    VendorPendingHistoryComponent,
    LogoutComponent,
    VendorAcceptAndRejectComponent,
    CustomerCancelOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
