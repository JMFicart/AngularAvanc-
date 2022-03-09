import { Component, OnInit } from '@angular/core';
import { ColorswapService } from 'src/app/services/colorswap.service';

@Component({
  selector: 'app-exo-colorswap',
  templateUrl: './exo-colorswap.component.html',
  styleUrls: ['./exo-colorswap.component.css']
})
export class ExoColorswapComponent implements OnInit {

  constructor(private service: ColorswapService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.swapColor()
  }

}
