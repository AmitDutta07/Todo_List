import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import Model : LOgin/SignUp
import { UserLogin } from './Model/signin';
import { UserSignUP } from './Model/signup';
import { UserApiService } from './user-api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public newUser:any=[];
  public loginUser:any=[];
  constructor(private uservice:UserApiService, private route:Router) { 
    this.newUser=new UserSignUP('','','');
    this.loginUser=new UserLogin('','','');
  }

  ngOnInit(): void {
  }
  onSignUp(){
    console.log(this.newUser);
    this.uservice.signUP(this.newUser).subscribe((res:any)=>{
      console.log(res);
      alert(res.message);
    });
  }
  onLogin(){
    let loginData={
      'email':this.loginUser.email,
      'pass1':this.loginUser.pass1
    };
    console.log(this.loginUser);
    this.uservice.logIn(loginData).subscribe((res:any)=>{
      console.log(res);
      alert(res.message);
      if(res.message=='success'){
        localStorage.setItem('User',res.loggedUser);
        localStorage.setItem('token',res.token);
        console.log('Userdata has been save in local storage');
        this.route.navigateByUrl('/todo');
      }
    });
  }
}
