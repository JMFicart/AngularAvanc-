import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-objectif2',
  templateUrl: './exo-objectif2.component.html',
  styleUrls: ['./exo-objectif2.component.css']
})
export class ExoObjectif2Component implements OnInit {
  currentObjectif: string

  constructor() {this.currentObjectif = 'test'}

  ngOnInit(): void {
  }

}
