import { Orders } from "./orders";
import { User } from "./user";

export class DeliveryPartner {
    partner:User[]; //add class
    drivingLicense:string;
    vechileNumber:number;
    vechileName:string;
    availability:string;
    verificationStatus:boolean;
    notificationList:Notification[]; //add class
    orderList:Orders[]; //add class
  }