import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  temp = {
    celsius: null,
    fahreneit: null
  }

  constructor(public navCtrl: NavController) {


  }

  tempConvertFahreneit() {
    if (this.temp.celsius != null) {
      this.temp.fahreneit = ((this.temp.celsius) * 9 / 5) + 32 + 'F'

    } if (this.temp.celsius === '') {
      this.temp.fahreneit = ''
    }
  }
  tempConvertCelcius() {
    if (this.temp.fahreneit != null) {
      this.temp.celsius = ((this.temp.fahreneit) - 32) * 5 / 9 + 'C'
    } if (this.temp.fahreneit === '') {
      this.temp.fahreneit = ''
    }
  }


}
