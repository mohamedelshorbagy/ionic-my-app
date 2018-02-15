import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllProvider } from '../../providers/all/all';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private all:AllProvider
  ) {

  }


  // ionViewDidLoad() {
  //   this.all.getPosts().subscribe(res => {
  //     console.log(res);
  //   })
  // }
 goToAbout() {
   this.navCtrl.push(AboutPage);
 }

}
