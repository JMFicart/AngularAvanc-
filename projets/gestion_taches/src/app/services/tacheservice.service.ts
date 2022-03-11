import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() { }

  public addTache(toAdd: Tache){
    console.log(toAdd)
  }
}

