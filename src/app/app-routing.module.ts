import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CMSMainComponent } from './cmsmain/cmsmain.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { CustomerPendingHistoryComponent } from './customer-pending-history/customer-pending-history.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorOrderHistoryComponent } from './vendor-order-history/vendor-order-history.component';
import { VendorPendingHistoryComponent } from './vendor-pending-history/vendor-pending-history.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerCancelOrderComponent } from './customer-cancel-order/customer-cancel-order.component';
import { VendorAcceptAndRejectComponent } from './vendor-accept-and-reject/vendor-accept-and-reject.component';

const routes: Routes = [
  { path:'', component:CMSMainComponent },
  { path:'cms-main', component:CMSMainComponent },
  {path : 'dashboard', component : DashBoardComponent,
  children :
  [
    {path:'place-order', component:PlaceOrderComponent, outlet:'data'},
    {path:'customer-pending-order', component:CustomerPendingHistoryComponent, outlet:'data'},
    {path:'customer-order-history', component:CustomerOrderHistoryComponent, outlet:'data'},
    {path:'cancel-order', component:CustomerCancelOrderComponent, outlet:'data'},
    { path:'logout', component:LogoutComponent, outlet:'data'},
  ]
},
{ path:'customer-login', component:CustomerLoginComponent },
{ path:'vendor-login', component:VendorLoginComponent },
{path : 'vendor-dashboard', component : VendorDashboardComponent,
children:
[
  {path:'vendor-order-history', component:VendorOrderHistoryComponent, outlet:'data'},
  {path:'vendor-pending-history', component:VendorPendingHistoryComponent, outlet:'data'},
  {path:'vendor-accept-reject', component:VendorAcceptAndRejectComponent, outlet:'data'},
]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
