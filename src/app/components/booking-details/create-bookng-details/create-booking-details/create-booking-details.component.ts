import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetails } from 'src/app/models/booking-details';
import { BookingDetailsService } from 'src/app/services/booking-details.service';

@Component({
  selector: 'app-create-booking-details',
  templateUrl: './create-booking-details.component.html',
  styleUrls: ['./create-booking-details.component.css']
})
export class CreateBookingDetailsComponent implements OnInit{

  createBookingForm:FormGroup=new FormGroup({})
  userId:number=0
  hotelId:number=0

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingDetailsService:BookingDetailsService
    ) {
  }


  ngOnInit(): void {
    this.createBookingForm=this.formBuilder.group({
      bookedFrom: ['', Validators.required],
      bookedTo: ['', Validators.required],
      noOfAdults: ['', Validators.required],
      noOfChildren: ['', Validators.required],
      amount: ['', Validators.required],
      payment:this.formBuilder.group({
        paymentStatus: ['', [Validators.required]]
      })
    })

  }

  onSubmit(){
    if(this.createBookingForm.valid){
      let bookingDetails:BookingDetails=this.createBookingForm.value;
      this.bookingDetailsService.createBookingDetails(bookingDetails,this.userId,this.hotelId).subscribe(
        (data)=>{
          console.log(data);
        },
        (error)=>{
          console.log(error);
          alert("something went wrong");
        }
      )
      this.createBookingForm.reset();
    }

  }

}
