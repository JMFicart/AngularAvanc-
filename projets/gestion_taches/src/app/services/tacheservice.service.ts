import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private readonly BASE_URL = "http://localhost:3000/taches"


  constructor(private client: HttpClient) {}

  public getTaches(): Observable<Tache[]>{

    return this.client.get<Tache[]>(this.BASE_URL);

  }
  
  public addTache(toAdd: Tache){
    console.log(toAdd)
    return this.client.post<Tache>(this.BASE_URL,toAdd);
  }
}

