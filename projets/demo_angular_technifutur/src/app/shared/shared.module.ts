import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureFormatPipe } from './pipes/voiture-format.pipe';
import { ChronoPipe } from './pipes/chrono.pipe';
// import { FilterProduit } from './pipes/filter-produit.pipe/filter-produit.pipe.component';
import { SortProduitPipe } from './pipes/filter-produit.pipe';

@NgModule({
  declarations: [ VoitureFormatPipe, ChronoPipe, SortProduitPipe ],
  imports: [
    CommonModule
  ],
  exports: [ VoitureFormatPipe, ChronoPipe, SortProduitPipe ]
})
export class SharedModule { }
