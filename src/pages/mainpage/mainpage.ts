import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App, MenuController } from 'ionic-angular';
// import { cards } from '../pages/cards/cards';

/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainpagePage');
  }

}
