import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AllProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AllProvider Provider');
  }

  /*
    [ Function Name ] : getPosts()
    [ Parameters ] : None
    [ Functionality ] : - Make an GET HTTP REQUEST to the (jsonplaceholder.typicode.com) and get array of posts
    [ Returned Value ] : Array of JSON Objects
  */
  getPosts() {
    localStorage.setItem('token' , 'aslkjdnasiduia3846s58dasdkljalisudhiasd');
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
