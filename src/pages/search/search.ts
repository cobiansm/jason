import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CasaPage } from '../casa/casa';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  casas = [];
  items = [];
  casaPage = CasaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casas = this.navParams.get('casas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev){
    console.log(ev.target.value);
    this.items = this.casas.filter(casa => {
      return casa.ad.locations[0].locations[0].label.toLowerCase() == ev.target.value.toLowerCase();
    })
  }

  verCasa(casa) {
    this.navCtrl.push(this.casaPage, {casa: casa});
  }


}
