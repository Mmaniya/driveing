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
  feedback: string ="";
  constructor(private http: HttpClient, public storage: Storage, private router: Router, private NavCtrl: NavController) {
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
          "feedback":this.feedback,
      }
      console.log(this.dataModel)
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

}
