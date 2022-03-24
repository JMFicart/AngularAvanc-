import { Component, OnInit } from '@angular/core';
import { AjoutTacheEvent } from 'src/app/models/ajouttaches.module';
import { Taches } from 'src/app/models/taches.model';

@Component({
  selector: 'app-exo-gestiontachesparent',
  templateUrl: './exo-gestiontachesparent.component.html',
  styleUrls: ['./exo-gestiontachesparent.component.css']
})
export class ExoGestiontachesparentComponent implements OnInit {
  listTache: Taches[] = [
    {
      libelle: "Etudier",
      datecreation: new Date()
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(event: AjoutTacheEvent){
    if(event.up)
      this.listTache.unshift(event.task);
    else
      this.listTache.push(event.task);
  }

  onTaskMove(index: number, up: boolean){
    const toMove = this.listTache[index];
    if((up && index === 0) || (!up && index === this.listTache.length-1))
      return;

    const indexModifier = up ? -1 : 1;
    this.listTache.splice(index, 1);
    this.listTache.splice(index+indexModifier, 0, toMove);
  }
}
