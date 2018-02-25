import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contract',
  templateUrl: 'contract.html',
})
export class ContractPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContractPage');
  }

}

@Component({
  templateUrl: 'contract.html'
})
export class SizesPage { }