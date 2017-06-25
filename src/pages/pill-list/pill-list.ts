import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'


/**
 * Generated class for the PillListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pill-list',
  templateUrl: 'pill-list.html',
})
export class PillListPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private ngRedux: NgRedux<any>) {
  }

  @select("pills") pills$ : Observable<Array<any>>

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillListPage');
  }

}
