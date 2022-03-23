import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo-children2',
  templateUrl: './exo-children2.component.html',
  styleUrls: ['./exo-children2.component.css']
})
export class ExoChildren2Component implements OnInit {
  @Output('clicked-square')
  emitter = new EventEmitter();

  @Input()
  isRedAbove: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickSquare(){
    this.emitter.emit();
  }

}
