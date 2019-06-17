import { Offers } from "./offers";
import { FoodQuantity } from "./foodquantity";

export class Cart {
    id:number;
    foodQuantityList:FoodQuantity[]; //add class
    grandTotal:number;
    offer:Offers[]; //add class
    total:number;
    saving:number;
  }