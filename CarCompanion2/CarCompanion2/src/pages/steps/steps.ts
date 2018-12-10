import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';
import { Health } from '@ionic-native/health';


/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-steps',
  templateUrl: 'steps.html',
})
export class StepsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private pedometer: Pedometer, private health: Health) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepsPage');
  }
  info = {
     steps:0,
  };
  /*getSteps(){
    //this.health.isAvailable().then( (temp) => { console.log('avail'); } );
    console.log('what the fuck');

    this.health.isAvailable()
    .then((available:boolean) => {
      console.log(available);
      this.health.requestAuthorization([
        'distance', 'nutrition',  //read and write permissions
        {
          read: ['steps'],       //read only permission
          write: ['height', 'weight']  //write only permission
        }
      ])
      .then(res => console.log(res))
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }
  */
  getSteps(){
    var successHandler = function (pedometerData) {
    this.info.steps = pedometerData.numberOfSteps;
    // pedometerData.distance;
    // pedometerData.floorsAscended;
    // pedometerData.floorsDescended;
};
var somedate = new Date();
  somedate.setDate( somedate.getDate() - 1 );
var options = {
    "startDate": somedate,
    "endDate": new Date()
};
var onError = function(pedometerData){};
//var data =
this.pedometer.queryData(options).then(
(response) => { this.info.steps = response.numberOfSteps; }
);
//this.health.steps = data.numberOfSteps;

}

}
