import { Component,OnInit } from '@angular/core';
import { BookingDetailsService } from 'src/app/services/booking-details.service';

@Component({
  selector: 'app-all-booking-details',
  templateUrl: './all-booking-details.component.html',
  styleUrls: ['./all-booking-details.component.css']
})
export class AllBookingDetailsComponent implements OnInit{

  bookings:any;

  constructor(private bookingDetailsService:BookingDetailsService){}
  ngOnInit(): void {
    this.getAllBookingDetails();
  }

  getAllBookingDetails(){
    this.bookingDetailsService.getAllBookingDetails().subscribe(
      (data)=>{
        this.bookings=data;
      },
      (error)=>{
        console.log(error);
        alert('something went wrong');
      }
    )
  }



}
