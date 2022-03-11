import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouttacheComponent } from './components/ajouttache/ajouttache.component';
import { ModiftacheComponent } from './components/modiftache/modiftache.component';
import { CloturetacheComponent } from './components/cloturetache/cloturetache.component';
import { AnnulationtacheComponent } from './components/annulationtache/annulationtache.component';
import { ListetacheComponent } from './components/listetache/listetache.component';
import { DetailtacheComponent } from './components/detailtache/detailtache.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AjouttacheComponent,
    ModiftacheComponent,
    CloturetacheComponent,
    AnnulationtacheComponent,
    ListetacheComponent,
    DetailtacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
