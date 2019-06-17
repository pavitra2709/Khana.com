import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout'
import{MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {CustomerComponent} from './dashboard/customer/customer.component';
import {RestaurantListComponent} from './restaurant/restaurant-list/restaurant-list.component'
import { SearchComponent } from './dashboard/search/search.component';
import { FoodListComponent } from './food/food-list/food-list.component';

@NgModule({
 
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CustomerComponent,
    RestaurantListComponent,
    SearchComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
