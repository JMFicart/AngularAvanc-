import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private readonly BASE_URL = "http://localhost:3000/taches"
  tacheslist: Array<Tache> = []

  constructor(private client: HttpClient) {}

  public getTaches(){
    this.client.get<Tache[]>(this.BASE_URL).subscribe(taches => this.tacheslist = taches);
  }
  
  public addTache(toAdd: Tache){
    console.log(toAdd)
    this.client.post(this.BASE_URL,toAdd).subscribe(() => this.getTaches());
  }
}

