import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { FormGroup, FormsModule} from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { SharedModule } from '../shared/shared.module';
import { ExoProduitsComponent } from './components/exo-produits/exo-produits.component';
import { ExoChildrenComponent } from './components/exo-children/exo-children.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoEnfant2Component } from './components/exo-enfant2/exo-enfant2.component';
import { ExoChildren2Component } from './components/exo-children2/exo-children2.component';
import { ExoFormsComponent } from './components/exo-forms/exo-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExoGestiontachesparentComponent } from './components/exo-gestiontachesparent/exo-gestiontachesparent.component';
import { ExoGestiontachesenfantComponent } from './components/exo-gestiontachesenfant/exo-gestiontachesenfant.component';
import { ExoGestiontachesenfantItemComponent } from './components/exo-gestiontachesenfant-item/exo-gestiontachesenfant-item.component';
import { ExoMenuComponent } from './components/exo-menu/exo-menu.component';
import { ExoPanierComponent } from './components/exo-panier/exo-panier.component';
import { ExoObjectif1Component } from './components/exo-objectif1/exo-objectif1.component';
import { ExoObjectif2Component } from './components/exo-objectif2/exo-objectif2.component';

@NgModule({
  declarations: [
    ExoBindingComponent,
    ExoComponent,
    ExoChronoComponent,
    ExoProduitsComponent,
    ExoChildrenComponent,
    ExoParentComponent,
    ExoEnfant2Component,
    ExoChildren2Component,
    ExoFormsComponent,
    ExoGestiontachesparentComponent,
    ExoGestiontachesenfantComponent,
    ExoGestiontachesenfantItemComponent,
    ExoMenuComponent,
    ExoPanierComponent,
    ExoObjectif1Component,
    ExoObjectif2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }
