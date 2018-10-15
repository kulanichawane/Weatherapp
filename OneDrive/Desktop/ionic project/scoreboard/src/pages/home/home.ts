import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {obj} from '../../app/object';
import array from '../../app/array';
import { ScoreboardPage } from '../../pages/scoreboard/scoreboard';
import arrray from '../../app/array';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  }
team1;
team2;


add(){



  array[0]=this.team1;
  array[1]=this.team2;








if(this.team1==this.team2 && this.team2==this.team1){

  const a =this.alertCtrl.create({

    title:'Alert',
    subTitle:'Confirmation',
    message:'You Entered same team name',
    buttons:['Confirm'] ,
    
    
  
  
  })
  a.present();
}else{
  this.navCtrl.push(ScoreboardPage);
}


}
}
