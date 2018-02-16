import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AllProvider } from '../../providers/all/all';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  posts: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private all:AllProvider
  ) {
  }

  /*
    = Life Cycle Hook:
      - Called every time we instantiate the Page ==> Equals to ngOnInit in Angular
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');  
    this.all.getPosts().subscribe(res => {
      this.posts = res;
    })
  }
  
}
