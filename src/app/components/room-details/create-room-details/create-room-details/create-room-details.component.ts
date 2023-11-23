import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomDetails } from 'src/app/models/room-details';
import { RoomDetailsService } from 'src/app/services/room-details.service';

@Component({
  selector: 'app-create-room-details',
  templateUrl: './create-room-details.component.html',
  styleUrls: ['./create-room-details.component.css']
})
export class CreateRoomDetailsComponent implements OnInit{

  createRoomDetailsForm:FormGroup=new FormGroup({})
  hotelId:number=0

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomDetailsService:RoomDetailsService
    ) {
  }

  ngOnInit(): void {
    this.createRoomDetailsForm=this.formBuilder.group({
      roomNo: ['', [Validators.required,Validators.pattern(/[A-Z]\d{3}/)]],
      roomType: ['', [Validators.required,Validators.pattern(/^(Premium|Suites|Deluxe|Double Deluxe)$/)]],
      ratePerDay: ['', Validators.required],
      isavailable: ['', [Validators.required,Validators.pattern(/^(true|false)$/i)]],
      fileName: ['', Validators.required],
      fileType: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.createRoomDetailsForm.valid){
      let roomDetails:RoomDetails=this.createRoomDetailsForm.value;
      this.roomDetailsService.createRoomDetails(roomDetails,this.hotelId).subscribe(
        (data)=>{
          console.log(data);
          alert("success");
        },
        (error)=>{
          console.log(error);
          alert('something went wrong');
        }
      )
      this.createRoomDetailsForm.reset();
    }
  }

}
