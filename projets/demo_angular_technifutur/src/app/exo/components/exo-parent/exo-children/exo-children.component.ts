import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exo-children',
  templateUrl: './exo-children.component.html',
  styleUrls: ['./exo-children.component.css']
})
export class ExoChildrenComponent implements OnInit {

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
