import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {

  user = {
    name:"",
    email:"",
    image:""
  }

  editedUser = {
    name:"",
    email:"",
    image:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.user=this.navParams.get('user');
    console.log('ionViewDidLoad EditUserPage');
  }

  closeModal(){
    //console.log(this.user);
    this.user=this.editedUser;
    this.viewCtrl.dismiss(this.user);
  }

  cancelModal(){
    //console.log(this.user);
    this.viewCtrl.dismiss();
  }

}
