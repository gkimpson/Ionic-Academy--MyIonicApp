import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app_title = 'Calculator';
  a = '5';
  b = '6';
  result = 0;

  constructor(public navCtrl: NavController) {

  }

  calculate() {
    this.result = parseInt(this.a) + parseInt(this.b);
  }

}
