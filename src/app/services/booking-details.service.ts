import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  constructor(private http:HttpClient) { }

  contextPath = 'http://localhost:6633';

  createBookingDetails(
    bookingDetailsDTO: any,
    userId: number,
    hotelId: number
  ): Observable<any> {
    const url = `${this.contextPath}/normaluser/bookings/user/${userId}/hotel/${hotelId}`;

    return this.http.post<any>(url, bookingDetailsDTO);
  }

  getAllBookingDetails():Observable<any>{
    const url=`${this.contextPath}/admin/bookings/`;
    return this.http.get<any>(url);
  }

}
