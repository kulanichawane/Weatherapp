import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import arrayx from '../../app/array';
import { MainPage } from '../main/main'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  


  
 name;
 surname;
  constructor(public navCtrl: NavController) {

  }


submit(){
 arrayx[0]=this.name;
 arrayx[1]=this.surname;

  console.log(arrayx[0]);
  console.log(arrayx[1]);
  this.navCtrl.push(MainPage);

}




}

