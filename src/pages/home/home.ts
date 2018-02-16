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
    private all: AllProvider
  ) {

  }


  // ionViewDidLoad() {
  //   this.all.getPosts().subscribe(res => {
  //     console.log(res);
  //   })
  // }
  /*
    [ Function Name ] : goToAbout()
    [ Parameters ] : None
    [ Functionality ] : - Move to the AboutPage ==> Stack Order
    [ Returned Value ] : None
  */

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

}
