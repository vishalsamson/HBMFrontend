import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { NormaluserComponent } from './components/normaluser/normaluser.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar/admin-sidebar.component';
import { CreateUserComponent } from './components/hotel/create-hotel/create-hotel.component';
import { HotelListComponent } from './components/hotel/hotelList/hotel-list/hotel-list.component';
import { NormaluserSidebarComponent } from './components/normaluser/normaluser-sidebar/normaluser-sidebar/normaluser-sidebar.component';
import { UsersListComponent } from './components/normaluser/users-list/users-list/users-list.component';
import { CreateReviewComponent } from './components/reviews/create-review/create-review/create-review.component';
import { AllreviewsComponent } from './components/reviews/allreviews/allreviews/allreviews.component';
import { CreateBookingDetailsComponent } from './components/booking-details/create-bookng-details/create-booking-details/create-booking-details.component';
import { AllBookingDetailsComponent } from './components/booking-details/all-booking-details/all-booking-details/all-booking-details.component';
import { AllRoomDetailsComponent } from './components/room-details/all-room-details/all-room-details/all-room-details.component';
import { CreateRoomDetailsComponent } from './components/room-details/create-room-details/create-room-details/create-room-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NormaluserComponent,
    HeaderComponent,
    ForbiddenComponent,
    HomeComponent,
    AdminSidebarComponent,
    CreateUserComponent,
    HotelListComponent,
    NormaluserSidebarComponent,
    UsersListComponent,
    CreateReviewComponent,
    AllreviewsComponent,
    CreateBookingDetailsComponent,
    AllBookingDetailsComponent,
    AllRoomDetailsComponent,
    CreateRoomDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
