import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  validName: any;
  validEmail: any;
  validMobile: any;
  validage: any;
  validaddress: any;
  validgender: any;
  validdate:any;
  validtimes:any;
  dataSource = []
  constructor(private storage: Storage, private sms: SMS) { 
    this.storage.get('storedata').then((val) => {
      console.log(val);
      this.dataSource = val
      // this.validName = val.firstname;
      // this.validEmail = val.email;
      // this.validMobile = val.mobile;
      // this.validage = val.age;
      // this.validaddress = val.address;
      // this.validgender = val.gender;
      // this.validdate = val.date;
      // this.validtimes = val.times;
    });
  }
  sendSms(){
    this.sms.send('7373898190','Your Booking confirmed.!');
  }

  ngOnInit() {
  } 
}
