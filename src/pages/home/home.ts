import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

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

  itemTapped(user){
    this.navCtrl.push(DetailPage, {user:user})
  }

}
