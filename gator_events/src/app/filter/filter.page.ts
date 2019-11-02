import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
 
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  modalTitle: string;
  modalID: number;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.modalTitle)
    console.log(this.modalID)
  }

  async closeModal() {
    const onClosedData: string = "Filtering...";
    await this.modalController.dismiss(onClosedData);
  }
}
