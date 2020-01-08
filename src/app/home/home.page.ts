import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'modal-page',
  template: '<div>template</div>'
})
export class ModalPage {

  constructor() {

  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionModalDidPresent() {
    console.log("ionModalDidPresent");
  }

  ionModalDidDismiss() {
    console.log("ionModalDidDismiss");
  }

  ionModalWillDismiss() {
    console.log("ionModalWillDismiss");
  }

  ionModalWillPresent() {
    console.log("ionModalWillPresent");
  }

}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}


