import { HttpClient } from '@angular/common/http';
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
  panier = this.service.contenu

  // menu!: Menu[];

  constructor(builder: FormBuilder, private service: MenuService, private client: HttpClient) {
    this.menuForm = builder.group(MENU_FORM)
    // client.get<Menu[]>("http://localhost:3000/plats").subscribe(menus => this.menu = panier)

    // client.post
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addProduit(this.menuForm.value)
  }

  onDelete(i:number){
    this.service.removeProduit(i)
    this.panier = this.service.contenu
  }
}
