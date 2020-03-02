import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { SMS } from '@ionic-native/sms/ngx';
import { MenuController} from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

declare var SMS: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  mobile:any;
  dataSource = []
  // private sms: SMS,
  constructor(private storage: Storage, public menuCtrl:MenuController, private androidPermissions: AndroidPermissions) { 
    this.storage.get('storedata').then((val) => {
      this.dataSource = val
    });
  }


  sendSms(event ,val ){
    this.mobile = JSON.stringify(val.mobile);
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
            success => {
                if (!success.hasPermission) {
                    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
                    then((success) => {
                            this.sendMessage();
                        },
                        (err) => {
                            console.error(err);
                        });
                } else {
                    this.sendMessage();
                }
            },
            err => {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
                then((success) => {
                        this.sendMessage();
                    },
                    (err) => {
                        console.error(err);
                    });
            });
            this.mobile = JSON.stringify(val.mobile);
    }

    sendMessage(){
        if(SMS) {
            SMS.sendSMS(this.mobile, "Your Booking confirmed.!", () => {
                console.log('Message sent successfully');
            }, (error) => {
                console.error(error);
            });
        }
    }

    cancel(event ,val ){
      this.mobile = JSON.stringify(val.mobile);
          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
              success => {
                  if (!success.hasPermission) {
                      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
                      then((success) => {
                              this.cancelMessage();
                          },
                          (err) => {
                              console.error(err);
                          });
                  } else {
                      this.cancelMessage();
                  }
              },
              err => {
                  this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
                  then((success) => {
                          this.cancelMessage();
                      },
                      (err) => {
                          console.error(err);
                      });
              });
              this.mobile = JSON.stringify(val.mobile);
      }
  
      cancelMessage(){
          if(SMS) {
              SMS.cancel(this.mobile, "Your Booking Cancel.!", () => {
                  console.log('Message sent successfully');
              }, (error) => {
                  console.error(error);
              });
          }
      }

  // sendSms(event ,val ){
  //   this.mobile = JSON.stringify(val.mobile);
  //   this.sms.send(this.mobile,'Your Booking confirmed.!');
  // }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

}
