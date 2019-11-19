import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterPageModule } from '../filter/filter.module';
import { MenuController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';
import { Event, EventService } from './../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  events: Event[];
  dataReturned:any;

  constructor(
    public modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private eventService: EventService
    ) {}

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.eventService.getEvents().subscribe(res => {
       this.events = res;
    })
  };

  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      // componentProps: 
      // {
      //   "paramID": 123,
      //   "paramTitle": "Test Title"
      // }
    });

    modal.onDidDismiss().then((dataReturned) => 
    {
      if (dataReturned !== null) 
      {
        this.dataReturned = dataReturned.data;
        console.log("Modal sent data " + dataReturned)
      }
    });

    // remove(item) {
    //  this.eventService.removeEvent(item.id);
    // }

    await modal.present();
  }
}


