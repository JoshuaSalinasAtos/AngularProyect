import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../pages/login/login.component";
import { AdminComponent } from '../pages/admin/admin.component';
import { AdminHomeComponent } from '../pages/admin/route-child/home/admin-home.component';
import { AdminFunkoCreateComponent } from '../pages/admin/route-child/create/admin-funko-create.component';
import { AdminSellListComponent } from '../pages/admin/route-child/list/admin-sell-list.component';
import { CustomerHomeComponent } from '../pages/customer/route-child/home/customer-home.component';
import { CustomerShoppingCart } from "../pages/customer/route-child/shopping-cart/customer-shopping-cart.component";
import { DialogContentComponent, NavbarComponent } from '../navbar/nav-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CustomDatePipe} from '../pipes/custom-date-pipe';
import {CustomerComponent} from '../pages/customer/customer.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminFunkoCreateComponent,
    AdminSellListComponent,
    CustomerHomeComponent,
    NavbarComponent,
    CustomDatePipe,
    CustomerComponent,
    CustomerShoppingCart,
    DialogContentComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
  ],
  exports: [
    LoginComponent,
    AdminComponent,
    CustomerHomeComponent,
    CustomerComponent,
    CustomerShoppingCart,
    MatSliderModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    
  ]
})
export class PagesModule {}