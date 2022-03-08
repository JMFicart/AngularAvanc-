import { Directive, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[bggreenstyle]'
})
export class GreenBgDirective implements OnInit{
  @Output('colorChanged')
  emitter = new EventEmitter<string>()

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    setInterval(() => {
        let bg = this.element.nativeElement.style.backgroundColor;
        this.element.nativeElement.style.backgroundColor = bg == 'green' ? 'lightgreen': 'green';
        this.emitter.emit(this.element.nativeElement.style.backgroundColor);
    }, 1000)

  }
}
