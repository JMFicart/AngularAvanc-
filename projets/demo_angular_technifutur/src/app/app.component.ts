import { Component } from '@angular/core';
import { ColorswapService } from './services/colorswap.service';
import { ObjectifService } from './services/objectif.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo_angular_technifutur';
  currentObjectif: string = "";
  currentColor: string = "cyan";

  constructor(private service: ObjectifService, private serviceColor: ColorswapService) {
    service.obsObjectif.subscribe(info =>this.currentObjectif = info)
    serviceColor.obsColorswap.subscribe(infocolor =>this.currentColor = infocolor)
    // alert("Emission d'infos")
  }

}

