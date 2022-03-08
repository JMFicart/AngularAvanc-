import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {
  color: string = 'black';
  bgcolor: string = 'blue';
  numberInput: number = 0;
  displayed: boolean = false;
  cpt:number = 0;

  tableau = [
    "pomme",
    "banane",
    "cerise"
  ]

  constructor() { }

  ngOnInit(): void {
    for(let fruit of this.tableau){
      console.log(fruit);
    }
  }

  toggleDisplay() {
    this.displayed = !this.displayed;
  } 

  oncolorChanged(color: string){
    // console.log(color);
  }

  duplcompte(){
    this.cpt++
  }
}

