import { Branch } from "./branch";
import { User } from "./user";
import { FoodReview } from "./foodreview";
import { Orders } from "./orders";
import { AriaDescriber } from "@angular/cdk/a11y";
import { Address } from "./address";

export class Restaurant {
   id:number;
   name:string;
   manager:string;
   fassaid:number;
   gstNumber:string;
   imageUrl:string;
   cuisine:string[];
   address:Address;
   timings:string;
   averageRating:number;
   averagePrice:number;
   type:string[];
reviewList:FoodReview[];
orderList:Orders[];
notification:Notification;
  }