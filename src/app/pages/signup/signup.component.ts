import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^[A-Z][a-z]{3}\d{3}$/)]],
      mobile: ['',[Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', [Validators.required,Validators.pattern(/^(true|false)$/)]],
      
    })
  }


  onSubmit(){
    if(this.signupForm.valid){
      let user:User=this.signupForm.value;
      this.userService.addUser(user).subscribe(
        (data)=>{
          console.log(data);
          alert('success');
        },
        (error)=>{
          console.log(error);
          alert('something went wrong');
        }
      )
      this.signupForm.reset();
      this.router.navigateByUrl('/login');
    }
    
  }
}
