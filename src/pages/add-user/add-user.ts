import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  user = {
    name:"",
    email:""
  }

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl:ViewController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }
  
  closeModal(){
    this.viewCtrl.dismiss(this.user);
  }

  cancelModal(){
    this.viewCtrl.dismiss();
  }

}
