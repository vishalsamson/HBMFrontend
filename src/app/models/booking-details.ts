import { DatePipe } from "@angular/common";

export interface BookingDetails {
    bookedFrom:string
    bookedTo:string
    noOfAdults:number
    noOfChildren:number
    amount:number;
    payment:{
        paymentStatus:boolean
    }
}
