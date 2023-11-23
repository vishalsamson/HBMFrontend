import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotelform } from 'src/app/models/hotelform';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateUserComponent implements OnInit{
  createHotelForm:FormGroup=new FormGroup({})

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private hotelService:HotelService
    ) {
  }
  ngOnInit(): void {
    this.createHotelForm=this.formBuilder.group({
      city: ['', Validators.required],
      hotelName:['',Validators.required],
      address:['',Validators.required],
      description:['',Validators.required],
      averageRatePerDay:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone1:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      phone2:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      website:['',[Validators.required,Validators.pattern(/^www\.[a-zA-Z0-9-]+\.com$/)]],
      isBooked:['',[Validators.required,Validators.pattern(/^(true|false)$/)]]
    })
  }

  onSubmit(){
    if(this.createHotelForm.valid){
      let hotel:Hotelform=this.createHotelForm.value;
      this.hotelService.addHotel(hotel).subscribe(
        (res:any)=>{
          console.log(res);
          alert("hotel added successfully");
        },
        (error)=>{
          console.log(error);
          alert("something went wrong");
        }
      )
      this.createHotelForm.reset();
      this.router.navigateByUrl('/hotel-list');
    }
  }
}
