import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule }  from './app-routing/app-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import{MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RestaurantlistComponent } from './restaurant/restaurantlist/restaurantlist.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { RestaurantsearchComponent } from './restaurant/restaurantsearch/restaurantsearch.component';
import { FoodlistComponent } from './food/foodlist/foodlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantdetailComponent } from './restaurant/restaurantdetail/restaurantdetail.component';
import { RestaurantsortbyComponent } from './restaurant/restaurantsortby/restaurantsortby.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
 
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    RestaurantlistComponent,
    CustomerComponent,
    // RestaurantfilterpipePipe,
    RestaurantsearchComponent,
    FoodlistComponent,
    PageNotFoundComponent,
    RestaurantdetailComponent,
    RestaurantsortbyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
