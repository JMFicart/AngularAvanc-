import { Directive, ElementRef, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[compter]'
})
export class Part21DirectiveDirective {
  @Input('compter')
  tstTexte?:string;

  
  @Output('duplication')
  emitter = new EventEmitter<string>()

  constructor(private _ref : ElementRef) { }

  ngOnInit():void {
    this.CreateElement();
  }

  CreateElement(): void {
    const child = document.createElement('p');

    child.innerText = this.tstTexte ? this.tstTexte : 'Texte à dupliquer';
    child.onclick = () => {this.CreateElement();
    };
    this._ref.nativeElement.appendChild(child);
    this.emitter.emit();
  }
}
