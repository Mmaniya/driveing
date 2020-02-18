import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms/ngx';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mobile:any;
  dataSource = []
  constructor(private storage: Storage, private sms: SMS, public menuCtrl:MenuController) { 
    this.storage.get('storedata').then((val) => {
      this.dataSource = val
    });
  }
  sendSms(event ,val ){
    this.mobile = JSON.stringify(val.mobile);
    this.sms.send(this.mobile,'Your Booking confirmed.!');
  }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

}
