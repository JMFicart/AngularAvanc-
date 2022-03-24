import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Taches } from 'src/app/models/taches.model';

@Component({
  selector: 'app-exo-gestiontachesenfant-item',
  templateUrl: './exo-gestiontachesenfant-item.component.html',
  styleUrls: ['./exo-gestiontachesenfant-item.component.css']
})
export class ExoGestiontachesenfantItemComponent implements OnInit {

  @Input()
  tache!: Taches;

  @Input('first')
  isFirst?: boolean;
  
  @Input('last')
  isLast?: boolean;

  @Output('move')
  moveEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  move(up: boolean){
    this.moveEmitter.emit(up);
  }

}
