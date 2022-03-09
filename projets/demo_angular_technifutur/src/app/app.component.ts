import { Component } from '@angular/core';
import { ObjectifService } from './services/objectif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo_angular_technifutur';
  currentObjectif: string = ""

  constructor(private service: ObjectifService) {
    service.obsObjectif.subscribe(info =>this.currentObjectif = info)
    // alert("Emission d'infos")
  }

}

