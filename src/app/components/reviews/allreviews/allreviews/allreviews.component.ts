import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-allreviews',
  templateUrl: './allreviews.component.html',
  styleUrls: ['./allreviews.component.css']
})
export class AllreviewsComponent implements OnInit {

  reviews: any

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.log(error);
        alert("something went wrong");
      }
    )
  }



}
