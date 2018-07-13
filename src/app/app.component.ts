import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyAJsDlwKU384l9Mz7Af0CMhWbFVOXvCvbo",
      authDomain: "http-client-demo-7d3fc.firebaseapp.com",
      databaseURL: "https://http-client-demo-7d3fc.firebaseio.com",
      projectId: "http-client-demo-7d3fc",
      storageBucket: "http-client-demo-7d3fc.appspot.com",
      messagingSenderId: "974935701926"
    };
    firebase.initializeApp(config);
  }
}