import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { Userlogin } from 'src/app/models/userlogin';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import * as jwt from 'jsonwebtoken';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService,
    private userAuthService:UserAuthService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^[A-Z][a-z]{3}\d{3}$/)]]
    })
  }


  onSubmit(){
    if(this.loginForm.valid){
      let userlogin:Userlogin=this.loginForm.value;
      this.userService.loginUser(userlogin).subscribe(
        (data:any)=>{

          this.userAuthService.setRoles(data.user.roles);
          this.userAuthService.setToken(data.token);
          console.log(data);

          const role=data.user.roles[0];
          if(role.roleName==='ADMIN'){
            this.router.navigateByUrl("/admin")
          }
          else{
            this.router.navigateByUrl('/normaluser');
          }
        },
        (error)=>{
          console.log(error);
          alert("something went wrong");
        }
      )
      this.loginForm.reset();
    }
  }

}
