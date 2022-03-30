import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../pages/admin/admin.component';
import { AdminFunkoCreateComponent } from '../pages/admin/route-child/create/admin-funko-create.component';
import { AdminHomeComponent } from '../pages/admin/route-child/home/admin-home.component';
import { AdminSellListComponent } from '../pages/admin/route-child/list/admin-sell-list.component';
import { CustomerComponent } from '../pages/customer/customer.component';
import { CustomerHomeComponent } from '../pages/customer/route-child/home/customer-home.component';
import { CustomerShoppingCart } from '../pages/customer/route-child/shopping-cart/customer-shopping-cart.component';
import { LoginComponent } from '../pages/login/login.component';
import { AdminGuard } from '../wards/admin.guard';
import { CustomerGuard } from '../wards/customer.guard';
const routes: Routes = [
  { path: "", redirectTo: "sign-in", pathMatch: 'full' },
  { path: "sign-in", component: LoginComponent, },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: AdminHomeComponent },
      { path: "editor/:funkoId", component: AdminFunkoCreateComponent },
      { path: "creator", component: AdminFunkoCreateComponent },
      { path: "list", component: AdminSellListComponent },
    ]
  },
  {
    path: "customer",
    component: CustomerComponent,
    canActivate: [CustomerGuard],
    canActivateChild: [CustomerGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: 'full'},
      { path: "home", component: CustomerHomeComponent },
      { path: "shopping-cart", component: CustomerShoppingCart },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
