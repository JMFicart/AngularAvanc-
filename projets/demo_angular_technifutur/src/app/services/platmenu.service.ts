import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatmenuService {
  private readonly BASE_URL = "http://localhost:3000/plats"
  
  constructor(private client : HttpClient) { }

  getPlats():Observable<Plat[]> {
    return this.client.get<Plat[]>(this.BASE_URL)
  }

}
