import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AJOUTTACHE_FORM } from 'src/app/forms/ajouttache.form';
import { TacheService } from 'src/app/services/tacheservice.service';

@Component({
  selector: 'app-detailtache',
  templateUrl: './detailtache.component.html',
  styleUrls: ['./detailtache.component.css']
})
export class DetailtacheComponent implements OnInit {
  detailTacheForm: FormGroup;

  constructor(builder: FormBuilder, private service: TacheService, private router: Router) {
    this.detailTacheForm = builder.group(AJOUTTACHE_FORM);
    // this.ajoutTacheForm.patchValue({
    //   datecreation: new Date()
    // })
  }

  ngOnInit(): void {
  }

  onClick(): void{}
}
