import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RoomDetailsService {

  constructor(private http:HttpClient) { }

  contextPath = 'http://localhost:6633';

  createRoomDetails(roomDetailsDTO: any, hotelId: number): Observable<any> {
    const url = `${this.contextPath}/admin/roomdetails/add/${hotelId}`;
    return this.http.post<any>(url, roomDetailsDTO);
  }

  getAllRooms():Observable<any>{
    const url=`${this.contextPath}/normaluser/roomdetails/`;
    return this.http.get<any>(url);
  }
}
