import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OBJECTIF_FORM } from 'src/app/forms/objectif.form';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-exo-objectif1',
  templateUrl: './exo-objectif1.component.html',
  styleUrls: ['./exo-objectif1.component.css']
})
export class ExoObjectif1Component implements OnInit {
  objectifForm: FormGroup;

  constructor(builder: FormBuilder, private service: ObjectifService) {
    this.objectifForm = builder.group(OBJECTIF_FORM)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.setObjectif(this.objectifForm.value.objectif)
  }
}
