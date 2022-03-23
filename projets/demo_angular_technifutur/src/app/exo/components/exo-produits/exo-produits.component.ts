import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/models/produits.model';

@Component({
  selector: 'app-exo-produits',
  templateUrl: './exo-produits.component.html',
  styleUrls: ['./exo-produits.component.css']
})
export class ExoProduitsComponent implements OnInit {
  // bgcolorVente: string = 'white';
  // bgcolorPasVente: string = 'red';
  // marque:string = '';
  // modele:string = '';
  sortingMethod?: 'marque'|'prix'|'stock'; 
  showNoSale = true;
  asc: boolean = true;

  constructor() { }
  
  products: Produits[] = [{marque:"Bonduelle", modele: "Haricots verts", stock: 15, prix: 5, en_vente: true},
                                {marque:"Boni", modele: "Tomates", stock: 1, prix: 2, en_vente: false},
                                {marque:"Stabilac", modele: "Lait entier", stock: 20, prix: 3, en_vente: true},
                                {marque:"Président", modele: "Camembert", stock: 15, prix: 5, en_vente: false}
                              ]

  ngOnInit(): void {
  }

  onDelete(index:number){
    if (confirm('Etes-vous sûr ?')) {
      this.products.splice(index, 1);
    }
  }

  onToggleEnVente(toToggle: Produits){
    toToggle.en_vente = !toToggle.en_vente;
  }
  
}
