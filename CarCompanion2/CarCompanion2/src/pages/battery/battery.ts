import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BatteryStatus } from '@ionic-native/battery-status';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Platform } from 'ionic-angular';


/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html',
})
export class BatteryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus, private plt: Platform) {
    this.plt.ready().then(()=>{
    this.subscription = this.batteryStatus.onChange().subscribe( (status) => {
      console.log(status.level, status.isPlugged);
      //this.batterylevel.Level=status.level;
    });
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryPage');
  }
  batterylevel = {
     Level:0,
  };

  subscription = null;

  selectBattery() {

    //this.batteryStatus.onChange().subscribe(status => {
    //   console.log(status.level, status.isPlugged);
    //   this.batterylevel.Level = status.level;
    //});
    this.subscription.unsubscribe();
    this.subscription = this.batteryStatus.onChange().subscribe(
      (status) => {
        this.batterylevel.Level = status.level;
        console.log(status.level, status.isPlugged);
      }
    );


  }

}
