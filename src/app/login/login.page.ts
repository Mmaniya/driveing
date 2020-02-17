import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NavController} from '@ionic/angular';
import { Router } from '@angular/router'; 

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string = "";
  password:any = "";

  constructor(private http: HttpClient, private router: Router, private NavCtrl: NavController, private storage: Storage) {   
    this.storage.get('storedata').then((val)=>{
    console.log(val);
  });}


  ngOnInit() {
  }

  checkUser(){
    if(this.username == 'admin@admin.com' && this.password == 'admin@123') {
      this.router.navigateByUrl('/profile') 
    }
  }


  // validateEmail(email) {
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

  // validate(){
  //   let valid = false;

  //   if(this.username == ""){
  //     alert('Enter E-Mail');
  //   }else if(!this.validateEmail(this.username)){
  //     alert('Enter Correct E-Mail');
  //   }else if(this.password == ""){
  //       alert("Enter Password First");
  //   }else{
  //     valid = true;
  //   }
  //   return valid;
  // }

  // checkUser() {
    
  //   if(this.validate()){
  //         let postData = {
  //         "username": this.username,
  //         "password":this.password,
  //     }
  //     // var thisObj = this;
  //       this.http.post(this.apiUrl,postData).subscribe(
  //         (res:any) => {
  //           // alert(JSON.stringify(res));
  //           this.storage.set('my-json', res);
  //           if(res.result == 'fail'){
  //             alert('Your Not Registered User.!')
  //           this.router.navigateByUrl('/signup')  
  //           }else{
  //             this.router.navigateByUrl('/profile')
  //           }          
  //         },
  //         err => {
  //           alert(err);
  //         }
  //       );
  //     }
  //   }
    


}
