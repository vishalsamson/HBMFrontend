import { Component,OnInit } from '@angular/core';
import { Hotelform } from 'src/app/models/hotelform';
import { Hotelresponse } from 'src/app/models/hotelresponse';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{

  hotels:Hotelresponse[]=[];

  constructor(private hotelService:HotelService){}


  ngOnInit(): void {
    this.getAllHotels();
  }

  getAllHotels(){
    this.hotelService.getAllHotels().subscribe(
      (data)=>{
        this.hotels=data;
      },
      (error)=>{
        console.log(error);
        alert('something went wrong');
      }
    )
  }

  // deleteHotel(hotel:Hotelresponse){
  //   this.hotelService.deleteHotel(hotel.hotelId).subscribe(
  //     (data)=>{
  //       console.log(data);
  //     },
  //     (error)=>{
  //       console.log(error);
  //       alert('something went wrong');
  //     }
  //   )
  // }

}
