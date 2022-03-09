import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  private _currentObjectif: string = 'Créer des observables'

  obsObjectif = new Subject<string>();

  constructor() {this._currentObjectif=''}

  public getObjectif(){
    return this._currentObjectif
  }

  public setObjectif(newObjectif: string){
    this._currentObjectif = newObjectif
    this.obsObjectif.next(this._currentObjectif)
  }
}
// un observable c'est 
// - un objet
// - qui envoie des infos au cours du temps
// - auxquelles on peut réagir
