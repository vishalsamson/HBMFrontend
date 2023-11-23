import { Component, OnInit } from '@angular/core';
import { RoomDetailsService } from 'src/app/services/room-details.service';

@Component({
  selector: 'app-all-room-details',
  templateUrl: './all-room-details.component.html',
  styleUrls: ['./all-room-details.component.css']
})
export class AllRoomDetailsComponent implements OnInit{

  rooms:any

  constructor(private roomDetailsService:RoomDetailsService){}

  ngOnInit(): void {
    this.getAllRoomDetails();
  }

  getAllRoomDetails(){
    this.roomDetailsService.getAllRooms().subscribe(
      (data)=>{
        this.rooms=data;
      },
      (error)=>{
        console.log(error);
        alert('something went wrong');
      }
    )
  }

}
