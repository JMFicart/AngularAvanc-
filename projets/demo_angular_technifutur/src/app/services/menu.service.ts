import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Menu } from '../models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  panier : Array<Menu> = []

  constructor() {}

  panierChanged = new Subject<Menu[]>()
  panierChanged1 = new BehaviorSubject<Menu[]>(this.panier.slice())

  public addProduit(toAdd: Menu){
    this.panier.push(toAdd)
    return true;
  }

  get contenu(){
    return this.panier;
  }

  public removeProduit(i: number){
    this.panier.splice(i, 1)
  }
}
