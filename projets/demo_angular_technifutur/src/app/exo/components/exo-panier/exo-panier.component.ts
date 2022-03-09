import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-exo-panier',
  templateUrl: './exo-panier.component.html',
  styleUrls: ['./exo-panier.component.css']
})
export class ExoPanierComponent implements OnInit {
    
  constructor(private service: MenuService) {}

  ngOnInit(): void {
  }

  panier = this.service.contenu

  onDelete(i:number){
    this.service.removeProduit(i)
    this.panier = this.service.contenu
  }
}
