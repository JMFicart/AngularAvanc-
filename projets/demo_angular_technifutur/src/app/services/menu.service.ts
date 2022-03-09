import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  panier : Array<Menu>

  constructor() {this.panier = []}

  public addProduit(toAdd: Menu): boolean{
    this.panier.push(toAdd)
    return true;
  }

  get contenu(){
    return this.panier;
  }

  public removeProduit(i: number){
    console.log(i)
    this.panier.splice(i, 1)
  }
}
