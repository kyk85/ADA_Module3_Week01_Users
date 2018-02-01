import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { ModalController } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { EditUserPage } from '../edit-user/edit-user';
import { UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public userProvider : UserProvider, public storage:Storage) {
    var self=this
    this.userProvider.getAllUsers(function(users){
      console.log(users)
      self.users=users
    });

    
  }

  users=[];

  viewUser(user){
    this.navCtrl.push(DetailPage, {user:user})
  }

  editUserModal(user){
    let modal = this.modalCtrl.create(EditUserPage,{user:user});
    modal.present();
    modal.onDidDismiss(data => {
      var userIndex=this.users.indexOf(user)
      //this.users[this.users.indexOf(user)]=data
      this.userProvider.editUser(data,userIndex);
      
    })
  }

  addUserModal() {
    let modal = this.modalCtrl.create(AddUserPage);
    modal.onDidDismiss(data => {
      if (data) {
        this.userProvider.addUser(data);
      //this.users.push(data);
      }
    })
    modal.present();
  }

  delete(user){
    this.userProvider.deleteUser(user)
  }

}
