import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[child-text]'
})
export class ChildTextDirectiveDirective implements OnInit {
  @Input('child-text')
  tstTexte?: string;

  constructor(private _ref : ElementRef) { }

  ngOnInit():void {
    // console.log(this.tstTexte);
    // const child = document.createElement('p');

    this.CreateElement();
    // child.innerText = this.tstTexte ? this.tstTexte : 'Texte à dupliquer';
    // child.onclick = () => {console.log(child.innerHTML);
    //     this.duplicateElement();
    //   };

    // this._ref.nativeElement.appendChild(child);
    // this._ref.nativeElement.innerHTML = '<p>' + this.tstTexte + '</p>'
  }

  CreateElement(): void {
    const child = document.createElement('p');

    child.innerText = this.tstTexte ? this.tstTexte : 'Texte à dupliquer';
    child.onclick = () => {console.log(child.innerHTML);
      this.CreateElement();
    };
    this._ref.nativeElement.appendChild(child);
  }
}
