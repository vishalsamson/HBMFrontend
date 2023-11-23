import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  contextPath = 'http://localhost:6633/normaluser';

  createReview(reviewDto: any, userId: number, hotelId: number): Observable<any> {
    const url = `${this.contextPath}/reviews/new?userId=${userId}&hotelId=${hotelId}`;
    return this.http.post<any>(url, reviewDto);
  }

  getAllReviews():Observable<any>{
    return this.http.get(`${this.contextPath}/reviews/`);
  }
}
