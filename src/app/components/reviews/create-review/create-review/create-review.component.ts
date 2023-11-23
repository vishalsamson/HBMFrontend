import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService
  ) {
  }

  createReviewForm: FormGroup = new FormGroup({})
  userId: number = 0;
  hotelId: number = 0;

  ngOnInit(): void {
    this.createReviewForm = this.formBuilder.group({
      reviewContent: ['', Validators.required],
      rating: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.createReviewForm.valid) {
      let review: Review = this.createReviewForm.value;
      this.reviewService.createReview(review, this.userId, this.hotelId).subscribe(
        (data) => {
          console.log(data);
          alert('success');
        },
        (error) => {
          alert('something went wrong');
        }
      )
      this.createReviewForm.reset();
    }
  }

}
