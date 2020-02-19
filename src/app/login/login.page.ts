import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, MenuController} from '@ionic/angular';
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

  constructor(private http: HttpClient, private router: Router,public menuCtrl:MenuController, private NavCtrl: NavController, private storage: Storage) {   
    this.storage.get('storedata').then((val)=>{
    console.log(val);
  });}

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  checkUser(){
    if(this.username == 'admin@admin.com' && this.password == 'admin@123') {
      this.router.navigateByUrl('/profile') 
    }
  }

}
