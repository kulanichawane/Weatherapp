import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import array from '../../app/array';
import {HomePage} from '../home/home';

/**
 * Generated class for the ScoreboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {

homet= array[0];
awayt=array[1]



team;
  home =0;
  away=0;

  score =0

  choose(parameter){
  
    this.team=parameter;
      
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');
  }


  homeclicked(){

alert("home clicked");



  }

  awayclicked(){

    alert("away clicked");
  }


addtry(){

if(this.team==1){

this.home=this.home + 5
}else{

  this.away=this.away+5
}



console.log(this.score);

}

addpenalty(score){


  if(this.team==1){

    this.home=this.home + 3
    }else{
    
      this.away=this.away+3}
}

addconv(score ){

  if(this.team==1){

    this.home=this.home + 2
    }else{
    
      this.away=this.away+2

}




}
trysub(){
  if(this.team==1){

    this.home=this.home - 5
    }else{
    
      this.away=this.away-5
    }

if(this.away < 0 ){

 
  this.away=0;

}else if(this.home<0){
  this.home=0;
}
    
  
}
penaltysub(){

  if(this.team==1){

    this.home=this.home - 3
    }else{
    
      this.away=this.away-3
    }

    if(this.away < 0 ){

 
      this.away=0;
    
    }else if(this.home<0){
      this.home=0;
    }
        
}
 convsub(){

  if(this.team==1){

    this.home=this.home - 2
    }else{
    
      this.away=this.away-2
    }

    if(this.away < 0 ){

 
      this.away=0;
    
    }else if(this.home<0){
      this.home=0;
    }
        

  }

  rest(){

    this.away=0;
    this.home=0;
    this.awayt="";
    this.homet="";

  //  this.navCtrl.push(HomePage);
  }




  }





