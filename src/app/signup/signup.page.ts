import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController} from '@ionic/angular';
import { Router } from '@angular/router'; 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
dataModel = [];
  firstname:string = "";
  mobile:string = "";
  email:string = "";
  age:string = "";
  address:string = "";
  gender:string = "";
  date:string ="";
  times:string="";

  constructor(private http: HttpClient,public storage: Storage, private router: Router, private NavCtrl: NavController) {
    this.storage.set('storedata', []);
    this.getTheValue();
   }

  ngOnInit() {
    
  }

  setTheValue() {
          let postData = {
          "firstname": this.firstname,
          "mobile": this.mobile,
          "email": this.email,
          "age":this.age,
          "address":this.address,
          "gender": this.gender,
          "date":this.date,
          "times":this.times,
      }
      console.log(this.dataModel)
      // var attempts = JSON.parse(this.storage.get("data"));
      // console.log(attempts);
      this.dataModel.push(postData)
      this.storage.set('storedata', this.dataModel);
      this.router.navigateByUrl('/home')
  } 

  getTheValue(){
    this.storage.get('storedata').then((val)=>{
      console.log(val)
      this.dataModel = val;
    });

  }
  

  // validateEmail(email) {
  //   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }
  // validatemobile(mbl){
  //   var phoneno = /^\d{10}$/;
  //   return phoneno.test(mbl)
  // }
  // validate(){
  //   let valid = false;
  //   if(this.firstname == ""){
  //       alert('Enter Name First');
  //   }else if(this.mobile == ""){
  //       alert('Enter Mobile Number');
  //   }else if(this.validatemobile(this.mobile)){
  //        alert('Enter Correct Mobile Number');
  //   }else if(this.username == ""){
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

  // showAlert() {
    
    // if(this.validate()){
    //       let postData = {
    //       "name": this.firstname,
    //       "username": this.username,
    //       "mobile": this.mobile,
    //       "password":this.password,
    //   }
        // this.http.post(this.apiUrl,postData).subscribe(
        //   (res:any) => {
        //     alert(res.result);
        //     if(res.result == 'success'){
        //     this.router.navigateByUrl('/gstno')  
        //     }else if(res.result == 'exist'){
        //       this.router.navigateByUrl('/signup')
        //     }          
        //   },
        //   err => {
        //     alert(err);
        //   }
        // );
      // }
    // }

}
