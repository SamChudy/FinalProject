import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera'
import { MusicPage } from '../music/music'
import { ContactsPage } from '../contacts/contacts'




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  buttonContactsclick() {
  this.navCtrl.push(ContactsPage);
  console.log('crap');}

  buttonMusicclick() {
  this.navCtrl.push(MusicPage);
  console.log('crap');}

  buttonCamerasclick() {
  this.navCtrl.push(CameraPage);
  console.log('crap');

  }

}
