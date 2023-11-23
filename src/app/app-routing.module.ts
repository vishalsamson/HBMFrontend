import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { NormaluserComponent } from './components/normaluser/normaluser.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUserComponent } from './components/hotel/create-hotel/create-hotel.component';
import { HotelListComponent } from './components/hotel/hotelList/hotel-list/hotel-list.component';
import { UsersListComponent } from './components/normaluser/users-list/users-list/users-list.component';
import { CreateReviewComponent } from './components/reviews/create-review/create-review/create-review.component';
import { AllreviewsComponent } from './components/reviews/allreviews/allreviews/allreviews.component';
import { CreateBookingDetailsComponent } from './components/booking-details/create-bookng-details/create-booking-details/create-booking-details.component';
import { AllBookingDetailsComponent } from './components/booking-details/all-booking-details/all-booking-details/all-booking-details.component';
import { CreateRoomDetailsComponent } from './components/room-details/create-room-details/create-room-details/create-room-details.component';
import { AllRoomDetailsComponent } from './components/room-details/all-room-details/all-room-details/all-room-details.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'normaluser', component: NormaluserComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {path:'home',component:HomeComponent},
  {path:'create-hotel',component:CreateUserComponent},
  {path:'hotel-list',component:HotelListComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'create-review',component:CreateReviewComponent},
  {path:'all-reviews',component:AllreviewsComponent},
  {path:'create-booking-details',component:CreateBookingDetailsComponent},
  {path:'all-booking-details',component:AllBookingDetailsComponent},
  {path:'create-room-details',component:CreateRoomDetailsComponent},
  {path:'all-room-details',component:AllRoomDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
