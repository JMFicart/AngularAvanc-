import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AJOUTTACHE_FORM } from 'src/app/forms/ajouttache.form';
import { TacheService } from 'src/app/services/tacheservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouttache',
  templateUrl: './ajouttache.component.html',
  styleUrls: ['./ajouttache.component.css']
})
export class AjouttacheComponent implements OnInit {
  ajoutTacheForm: FormGroup;

  constructor(builder: FormBuilder, private service: TacheService) {
    this.ajoutTacheForm = builder.group(AJOUTTACHE_FORM)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addTache(this.ajoutTacheForm.value)
    // console.log(this.ajoutTacheForm.value)
  }
}

