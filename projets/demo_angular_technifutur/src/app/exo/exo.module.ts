import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormGroup, FormsModule} from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ExoProduitsComponent } from './components/exo-produits/exo-produits.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoChildrenComponent } from './components/exo-parent/exo-children/exo-children.component';
import { ExoChildren2Component } from './components/exo-parent/exo-children2/exo-children2.component';
import { ExoFormsComponent } from './components/exo-forms/exo-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExoGestiontachesparentComponent } from './components/exo-gestiontachesparent/exo-gestiontachesparent.component';
import { ExoGestiontachesenfantComponent } from './components/exo-gestiontachesenfant/exo-gestiontachesenfant.component';
import { ExoGestiontachesenfantItemComponent } from './components/exo-gestiontachesenfant-item/exo-gestiontachesenfant-item.component';
import { ExoMenuComponent } from './components/exo-menu/exo-menu.component';
import { ExoPanierComponent } from './components/exo-panier/exo-panier.component';
import { ExoObjectif1Component } from './components/exo-objectif1/exo-objectif1.component';
import { ExoColorswapComponent } from './components/exo-colorswap/exo-colorswap.component';
import { HttpClientModule } from '@angular/common/http';
import { ExoAdditemComponent } from './components/exo-additem/exo-additem.component';
import { ExoPlatComponent } from './components/exo-plat/exo-plat.component';
import { ExoPairimpairComponent } from './components/exo-pairimpair/exo-pairimpair.component';

@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    ExoChronoComponent,
    ExoProduitsComponent,
    ExoChildrenComponent,
    ExoParentComponent,
    ExoChildren2Component,
    ExoFormsComponent,
    ExoGestiontachesparentComponent,
    ExoGestiontachesenfantComponent,
    ExoGestiontachesenfantItemComponent,
    ExoMenuComponent,
    ExoPanierComponent,
    ExoObjectif1Component,
    ExoColorswapComponent,
    ExoAdditemComponent,
    ExoPlatComponent,
    ExoPairimpairComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ExoModule { }
