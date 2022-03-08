import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoChildrenComponent } from './components/exo-children/exo-children.component';
// import { RouterModule, Routes } from '@angular/router';
import { ExoChronoComponent } from './components/exo-chrono/exo-chrono.component';
import { ExoFormsComponent } from './components/exo-forms/exo-forms.component';
import { ExoGestiontachesparentComponent } from './components/exo-gestiontachesparent/exo-gestiontachesparent.component';
import { ExoParentComponent } from './components/exo-parent/exo-parent.component';
import { ExoProduitsComponent } from './components/exo-produits/exo-produits.component';
import { ExoBindingComponent } from './exo-binding/exo-binding.component';
import { ExoComponent } from './exo.component';

const routes: Routes = [
    { path: "", component: ExoComponent, children: [
        { path:"binding", component:ExoBindingComponent },
        { path:"chrono", component:ExoChronoComponent },
        { path:"produits", component:ExoProduitsComponent },
        { path:"parent", component:ExoParentComponent},
        { path:"forms", component:ExoFormsComponent},
        { path:"taches", component:ExoGestiontachesparentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
