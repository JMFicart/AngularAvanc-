import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MENU_FORM } from 'src/app/forms/menu.form';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-exo-menu',
  templateUrl: './exo-menu.component.html',
  styleUrls: ['./exo-menu.component.css']
})
export class ExoMenuComponent implements OnInit {
  menuForm: FormGroup;

  constructor(builder: FormBuilder, private service: MenuService) {
    this.menuForm = builder.group(MENU_FORM)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.addProduit(this.menuForm.value)){
      // alert("Produit ajouté")
    }
  }
}
