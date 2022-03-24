import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AjoutTacheEvent } from 'src/app/models/ajouttaches.module';

@Component({
  selector: 'app-exo-gestiontachesenfant',
  templateUrl: './exo-gestiontachesenfant.component.html',
  styleUrls: ['./exo-gestiontachesenfant.component.css']
})
export class ExoGestiontachesenfantComponent implements OnInit {
  nom_tache!: string;

  @Output("add")
  addUp= new EventEmitter<AjoutTacheEvent>()

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(up: boolean){
    if( this.canAdd() )
      this.addUp.emit({
        task: {
          libelle: this.nom_tache,
          datecreation: new Date(),
        },
        up: up
      });
  }

  canAdd(){
    return this.nom_tache && this.nom_tache.trim();
  }

}
