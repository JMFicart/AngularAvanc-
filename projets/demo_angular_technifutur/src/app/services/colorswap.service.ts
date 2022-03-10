import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorswapService {
  private _color1: string = 'plum'
  private _color2: string = 'red'
  private _currentColor: string = 'plum'

  obsColorswap = new Subject<string>();

  constructor() {}

  public getColor(){
    return this._currentColor
  }

  public swapColor(){
    if(this._currentColor==this._color1){
      this._currentColor=this._color2
    } else {
      this._currentColor=this._color1
    }
    this.obsColorswap.next(this._currentColor)
  }
}
