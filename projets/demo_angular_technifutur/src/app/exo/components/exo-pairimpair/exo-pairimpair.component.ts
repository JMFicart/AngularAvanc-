import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exo-pairimpair',
  templateUrl: './exo-pairimpair.component.html',
  styleUrls: ['./exo-pairimpair.component.css']
})
export class ExoPairimpairComponent implements OnInit {

  ajoutTacheForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.ajoutTacheForm = builder.group(PRODUIT_INSERT_FORM);
    // this.ajoutTacheForm.patchValue({
    //   datecreation: new Date()
    // })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.log(this.ajoutTacheForm.value)
  }

}
function PRODUIT_INSERT_FORM(PRODUIT_INSERT_FORM: any): FormGroup {
  throw new Error('Function not implemented.');
}

