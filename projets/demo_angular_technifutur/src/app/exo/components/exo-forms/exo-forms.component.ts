import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { deuxLettresMarque, priceDoubleStock, PRODUIT_INSERT_FORM } from 'src/app/forms/produit.form';

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrls: ['./exo-forms.component.css']
})
export class ExoFormsComponent implements OnInit {
  form: FormGroup;
  // new FormGroup({
  //   'marqueproduit' : new FormControl('',[Validators.required, Validators.minLength(1),Validators.maxLength(30)]),
  //   'prixproduit' : new FormControl(0, [Validators.required, Validators.min(0)]),
  //   'modeleproduit' : new FormControl(undefined, [Validators.minLength(1),Validators.maxLength(30)]),
  //   'stockproduit' : new FormControl(1, [Validators.min(0), Validators.max(99)])
  // });

  constructor(builder: FormBuilder) { 
    this.form = builder.group(PRODUIT_INSERT_FORM, {validators: [priceDoubleStock, deuxLettresMarque]});
  }

  ngOnInit(): void {
  }
  onSubmit(){
    const message = this.form.value.nomproduit;
    alert(message);
  }
}

