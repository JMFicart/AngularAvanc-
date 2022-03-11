import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plat } from 'src/app/models/plat.model';
import { PlatmenuService } from 'src/app/services/platmenu.service';

@Component({
  selector: 'app-exo-plat',
  templateUrl: './exo-plat.component.html',
  styleUrls: ['./exo-plat.component.css']
})
export class ExoPlatComponent implements OnInit {

  id?:string | null
  plat!: Plat
  constructor( route: ActivatedRoute, private platservice: PlatmenuService){
    // this.id = route.paramMap.get('id')
  }

  ngOnInit(): void {
  }

}
