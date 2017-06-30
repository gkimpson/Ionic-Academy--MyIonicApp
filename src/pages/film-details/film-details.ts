import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openDetails() {
    this.navCtrl.push('FilmDetailsPage');
  }
 
  goToPlanets() {
    this.navCtrl.parent.select(2);
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

}
