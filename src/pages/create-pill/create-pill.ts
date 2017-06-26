import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgRedux} from '@angular-redux/store'

/**
 * Generated class for the CreatePillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-pill',
  templateUrl: 'create-pill.html',
})
export class CreatePillPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private ngRedux: NgRedux<any>) {
  }

  pill = {
    name: ""
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePillPage');
  }

  savePill(pill){
    this.ngRedux.dispatch({type: "CREATE_PILL", payload: pill})
    this.navCtrl.pop()
  }

}
