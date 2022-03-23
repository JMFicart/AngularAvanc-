import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { TacheForm } from '../forms/modiftache.form';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private readonly BASE_URL = "http://localhost:3000/taches"
  private updated = new Subject<null>();

  constructor(private client: HttpClient) {}

  public getTaches(): Observable<Tache[]>{
    return this.client.get<Tache[]>(this.BASE_URL);
  }
  
  public addTache(toAdd: Tache){
    console.log(toAdd)
    return this.client.post<Tache>(this.BASE_URL,toAdd);
  }

  public update(id: number, form: TacheForm): Observable<Tache>{
    return this.client.patch<Tache>(this.BASE_URL+'/'+id, form).pipe(tap(() => this.updated.next(null)));
  }

}

