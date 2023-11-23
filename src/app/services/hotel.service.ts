import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }


  contextPath = 'http://localhost:6633';


  //create new hotel
  public addHotel(hotel:any){
    return this.http.post(`${this.contextPath}/admin/hotels/`,hotel);
  }

  getAllHotels(): Observable<any> {
    return this.http.get<any>(`${this.contextPath}/admin/hotels/`);
  }

  deleteHotel(hotelId: number): Observable<any> {
    const url = `${this.contextPath}/admin/hotels/${hotelId}`;
    return this.http.delete<any>(url);
  }

  getHotelById(hotelId: number): Observable<any> {
    const url = `${this.contextPath}/normaluser/hotels/${hotelId}`;
    return this.http.get<any>(url);
  }

  

}
