import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorswapService {
  private _color1: string = 'white'
  private _color2: string = 'plum'
  private _currentColor: string = 'white'

  obsColorswap = new Subject<string>();

  constructor() {this._currentColor='white'}

  public getColor(){
    return this._currentColor
  }

  public swapColor(){
    if(this._currentColor==this._color1){
      this._currentColor==this._color2
    } else {
      this._currentColor==this._color1
    }
    this.obsColorswap.next(this._currentColor)
  }

  // public setColor(newColor: string){
  //   this._currentColor = newColor
  //   this.obsColorswap.next(this._currentColor)
  // }
}
