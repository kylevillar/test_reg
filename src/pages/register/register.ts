import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fname = '';
  lname = '';
  email = '';
  password = '';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    this.alertCtrl.create({
      title: "Info",
      message: 
      "<p>First Name " + this.fname + "</p>" + 
      "<p>Last Name " + this.lname + "</p>" + 
      "<p>Email " + this.email + "</p>" + 
      "<p>Password " + this.password + "</p>"
    }).present();
  }

}
