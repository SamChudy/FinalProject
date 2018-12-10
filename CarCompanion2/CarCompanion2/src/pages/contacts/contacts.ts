import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  value: string = "0"; // Default is 0

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, private plt: Platform) {
    this.plt.ready();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  contact = {
     phoneNumbers:null,
  };

  selectContacts() {
    //this.contacts.pickContact()
    //            .then((response: Contact) => {
    //               this.value = response.phoneNumbers[0].value;
    //            });
    this.contacts.pickContact().then((contact)=>{
      //alert("contacts:-->"+ JSON.stringify(contact));
      this.contact.phoneNumbers = contact.phoneNumbers[0].value;
   });
  }

}
