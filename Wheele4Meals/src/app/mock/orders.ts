import { DeliveryPartner } from "./deliverypartner";
import { Address } from "./address";
import { FoodReview } from "./foodreview";
import { Issue } from "./issue";
import { DeliveryPartnerReview } from "./deliverypartnerreview";
import { Status } from "./status";
import { User } from "./user";
import { Payment } from "./payment";
import { Cart } from "./cart";

export class Orders {
    id:number;
    cartList:Cart[]; //add class
    payment:Payment[]; //add class
    deliveryPartner:DeliveryPartner[]; //add class
    userName:User[]; //add class
    statusList:Status[];
    address:Address[];
    foodReview:FoodReview[];
    issue:Issue[];
    deliveryPartnerReview:DeliveryPartnerReview[];
  }