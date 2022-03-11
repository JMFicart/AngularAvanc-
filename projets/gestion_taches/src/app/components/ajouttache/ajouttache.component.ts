import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AJOUTTACHE_FORM } from 'src/app/forms/ajouttache.form';

@Component({
  selector: 'app-ajouttache',
  templateUrl: './ajouttache.component.html',
  styleUrls: ['./ajouttache.component.css']
})
export class AjouttacheComponent implements OnInit {
  ajouttacheForm: FormGroup;

  constructor(builder: FormBuilder, private service: MenuService, private client: HttpClient) {
    this.ajouttacheForm = builder.group(AJOUTTACHE_FORM)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addProduit(this.ajouttacheForm.value)
  }

}
