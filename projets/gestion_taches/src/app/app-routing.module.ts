import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouttacheComponent } from './components/ajouttache/ajouttache.component';
import { AnnulationtacheComponent } from './components/annulationtache/annulationtache.component';
import { CloturetacheComponent } from './components/cloturetache/cloturetache.component';
import { DetailtacheComponent } from './components/detailtache/detailtache.component';
import { ListetacheComponent } from './components/listetache/listetache.component';
import { ModiftacheComponent } from './components/modiftache/modiftache.component';

const routes: Routes = [
  // ne pas oublier le pathMatch: 'full', sinon boucle inf.
  { path:"", redirectTo:"accueil", pathMatch:'full' },
  { path:"ajouttache", component: AjouttacheComponent },
  { path:"annulationtache", component: AnnulationtacheComponent },
  { path:"cloturetache", component: CloturetacheComponent },
  { path:"modiftache", component: ModiftacheComponent },
  { path:"listetaches", component: ListetacheComponent },
  { path:"detailtache", component: DetailtacheComponent },
  // "**" s'active pour toutes les routes, c'est une wildcard
  { path:"**", redirectTo:"404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

