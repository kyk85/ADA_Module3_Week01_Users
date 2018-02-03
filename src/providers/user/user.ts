
import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  users = [{
    name:"Najib Razak",
    email:"najibrazak@malaysia.com",
    image:"https://memegenerator.net/img/images/600x600/8541436/najib-razak.jpg"
    },
    {
    name:"Mahathir Mohamad",
    email:"mahathir@malaysia.com",
    image:"https://pbs.twimg.com/profile_images/916511844235218944/LM_-IAUb.jpg"
    },
    {
    name:"Bruce Wayne",
    email:"imrich@gotham.com",
    image:"https://static.comicvine.com/uploads/original/11113/111135257/4222364-bruce_wayne_06.jpg"
    },
    {
    name:"Clark Kent",
    email:"hope@metropolis.com",
    image:"https://vignette.wikia.nocookie.net/superman/images/0/0a/Clarkkent-secretorigin.jpg/revision/latest/scale-to-width-down/288?cb=20100916050519"
    }
  ]

  constructor(private alertCtrl:AlertController, public storage:Storage) {
    console.log('Hello UserProvider Provider');
  }

  getAllUsers(callback){ 
    this.storage.get('user').then((val)=>{
      if (val) {
      this.users=JSON.parse(val);
      callback(this.users);
      } else {
      this.users=[]
      callback(this.users);
      }
    })
  }

  addUser(user){
    this.users.push(user);
    this.storage.set('user',JSON.stringify(this.users))
  }

  editUser(user,index){

    //console.log(this.users.indexOf(user))
    this.users[index]=user
    this.storage.set('user',JSON.stringify(this.users))
  }

  deleteUser(user){
    
      let alert = this.alertCtrl.create({
        title: 'Confirm Delete',
        message: 'Are you sure you want tso delete this user?',
        buttons: [
          {
            text:'Cancel',
            role:'cancel',
            handler:()=> {
              console.log('Cancel Clicked');
            }
          },
          {
            text:'Delete',
            handler: () => {
              for (var i=0; i<this.users.length; i++){
                if (this.users[i].name==user.name) {
                  this.users.splice(i,1);
                }
              }
            }

          }
        ]

      });
      alert.present();
    }
    
  }


