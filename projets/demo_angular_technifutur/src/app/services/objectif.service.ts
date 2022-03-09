import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  _currentObjectif: string

  constructor() {this._currentObjectif=''}

  public get objectif(){
    return this._currentObjectif
  }

  public setObjectif(newObjectif: string){
    this._currentObjectif = newObjectif
  }
}
