import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MODIFTACHE_FORM } from 'src/app/forms/modiftache.form';
import { TacheService } from 'src/app/services/tacheservice.service';

@Component({
  selector: 'app-modiftache',
  templateUrl: './modiftache.component.html',
  styleUrls: ['./modiftache.component.css']
})
export class ModiftacheComponent implements OnInit {
  modifTacheForm: FormGroup;

  constructor(builder: FormBuilder, private service: TacheService, private router: Router) {
    this.modifTacheForm = builder.group(MODIFTACHE_FORM);
    // this.ajoutTacheForm.patchValue({
    //   datecreation: new Date()
    // })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }
}
