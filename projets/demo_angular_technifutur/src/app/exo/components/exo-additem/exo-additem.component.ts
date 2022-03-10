import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PLAT_FORM } from 'src/app/forms/plat.form';
import { Plat } from 'src/app/models/plat.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-exo-additem',
  templateUrl: './exo-additem.component.html',
  styleUrls: ['./exo-additem.component.css']
})
export class ExoAdditemComponent implements OnInit {

  private readonly BASE_URL = "http://localhost:3000/plats"
  platForm: FormGroup;
  menu: Array<Plat> = []

  constructor(builder: FormBuilder, private service: MenuService, private client: HttpClient) {
    this.platForm = builder.group(PLAT_FORM)
  }

  ngOnInit(): void {
  }

  getPlats(){
    this.client.get<Plat[]>(this.BASE_URL).subscribe(plats => this.menu = plats);
  }

  onSubmit(){
    this.client.post(this.BASE_URL,this.platForm.value).subscribe(() => this.getPlats());
  }
}
