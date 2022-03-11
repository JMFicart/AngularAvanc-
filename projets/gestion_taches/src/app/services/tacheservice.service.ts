import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheserviceService {

  constructor() { }

  public addTache(toAdd: Tache){
    return true;
  }
}

