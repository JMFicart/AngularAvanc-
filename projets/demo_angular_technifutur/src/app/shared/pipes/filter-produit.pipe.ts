import { Pipe, PipeTransform } from '@angular/core';
import { Produits } from 'src/app/models/produits.model';

@Pipe({
  name: 'sortProduit',
  pure: false
})
export class SortProduitPipe implements PipeTransform {

  transform(value: Produits[], tri?: 'marque'|'prix'|'stock', asc: boolean = true): Produits[] {
    const clone = new Array<Produits>(...value);

    switch(tri){
      case 'marque':
        clone.sort( this.compareMarque );
        break;
      case 'prix':
        clone.sort( this.comparePrix );
        break;
      case 'stock':
        clone.sort( this.compareStock );
        break;
    }
    
    if(!asc)
      clone.reverse();
    
    return clone;
  }

  private compareMarque(p1:Produits, p2:Produits): number {
    return p1.marque.localeCompare(p2.marque);
  }

  private comparePrix(p1:Produits, p2:Produits): number {
    return p1.prix - p2.prix;
  }

  private compareStock(p1:Produits, p2:Produits): number {
    return p1.stock - p2.stock;
  }

}
