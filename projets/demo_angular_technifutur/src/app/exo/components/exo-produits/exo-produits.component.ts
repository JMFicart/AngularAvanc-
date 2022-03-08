import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/models/produits.model';

@Component({
  selector: 'app-exo-produits',
  templateUrl: './exo-produits.component.html',
  styleUrls: ['./exo-produits.component.css']
})
export class ExoProduitsComponent implements OnInit {
  bgcolorVente: string = 'white';
  bgcolorPasVente: string = 'red';
  marque:string = '';
  modele:string = '';

  // showNoSale: true;

  constructor() { }
  
  products: Produits[] = [{marque:"Bonduelle", modele: "Haricots verts", stock: 15, prix: 5, en_vente: true},
                                {marque:"Boni", modele: "Tomates", stock: 1, prix: 2, en_vente: false},
                                {marque:"Stabilac", modele: "Lait entier", stock: 20, prix: 3, en_vente: true},
                                {marque:"Président", modele: "Camembert", stock: 15, prix: 5, en_vente: false}
                              ]

  ngOnInit(): void {
  }

  toggleVente(toToggle: Produits){
    toToggle.en_vente = !toToggle.en_vente;
  }

  onDelete(index:number){
    if (confirm('Etes vous sur ?')) {
      this.products.splice(index, 1);
    }
  }
  
  mvtVente(marque: string, modele: string) {
    this.marque = marque;
    this.modele = modele;
    // console.log(this.marque + ' ' + this.modele);
    this.products.forEach(this.changeStatus);
  }

  changeStatus(item:Produits, index:number, arr:Produits[]){
    console.log('changeStatus');
    if (item.marque == this.marque && item.modele == this.modele) {
      console.log(index);
      console.log('Avant ' + arr[index].marque + ' ' + arr[index].modele + ' ' + arr[index].en_vente);
      arr[index].en_vente = !arr[index].en_vente;
      console.log('Après ' + arr[index].marque + ' ' + arr[index].modele + ' ' + arr[index].en_vente);
    }
  }
}
