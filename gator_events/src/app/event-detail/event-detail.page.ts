import { Event, EventService } from './../services/event.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})

@Injectable()
export class EventDetailPage implements OnInit {

  event: Event = {
    name: "",
    date: "",
    time: "",
    location: "",
    organization: "",
    details: ""
  }

  eventID = null;

  constructor(private eventService: EventService, private route: ActivatedRoute, 
     private loadingController: LoadingController, private nav: NavController, private modalController: ModalController) { }

  ngOnInit() {
    this.eventID = this.route.snapshot.params['id'];
    if (this.eventID) {
      this.loadEvent();
    }
  }

  async loadEvent() {

    const loading = await this.loadingController.create({
    });

    await loading.present();

    this.eventService.getEvent(this.eventID).subscribe(res => {
      loading.dismiss();
      this.event = res;
    })
  }

  // async saveEvent() {
  //   const loading = await this.loadingController.create({
  //   });

  //   await loading.present();

  //   this.eventService.addEvent(this.event).subscribe(res => {
  //     loading.dismiss();
  //     this.event = res;
  //   })
  // }

}
