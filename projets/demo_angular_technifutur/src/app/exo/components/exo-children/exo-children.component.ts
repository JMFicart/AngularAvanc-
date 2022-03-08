import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exo-children',
  templateUrl: './exo-children.component.html',
  styleUrls: ['./exo-children.component.css']
})
export class ExoChildrenComponent implements OnInit {

  @Input()
  isRedAbove: boolean = true;

  @Output('click-square')
  emitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClickChildren(){
    this.emitter.emit();
  }
}
