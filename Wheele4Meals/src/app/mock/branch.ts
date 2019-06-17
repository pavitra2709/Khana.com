import { Address } from "./address";
import { Cuisine } from "./cuisine";
import { Review } from "./review";
import { Orders } from "./orders";

export class Branch {
    id: number;
    managername: string;
    fassaiId:string;
    gstNo:number;
    cuisine:Cuisine[];  //add class
    address:Address[]; //add class
    time:string;
    reviewlist:Review[]; //add class
    orderlist:Orders[]; //add class
    notificationlist:Notification[]; //add class
  }