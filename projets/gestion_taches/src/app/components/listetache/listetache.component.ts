import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tacheservice.service';

@Component({
  selector: 'app-listetache',
  templateUrl: './listetache.component.html',
  styleUrls: ['./listetache.component.css']
})
export class ListetacheComponent implements OnInit {
  tacheslist: Array<Tache> = []
  constructor(private service: TacheService) {
    this.service.getTaches().subscribe({
      next:taches=> this.tacheslist= taches
  })
 }

  ngOnInit(): void {
  }

}
