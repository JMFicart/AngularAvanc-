import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MODIFTACHE_FORM } from 'src/app/forms/modiftache.form';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tacheservice.service';

@Component({
  selector: 'app-modiftache',
  templateUrl: './modiftache.component.html',
  styleUrls: ['./modiftache.component.css']
})
export class ModiftacheComponent implements OnInit {
  modifTacheForm: FormGroup;
  tache !: Tache

  constructor(builder: FormBuilder, private service: TacheService, private router: Router) {
    this.modifTacheForm = builder.group(MODIFTACHE_FORM);
    // this.ajoutTacheForm.patchValue({
    //   datecreation: new Date()
    // })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.tache && this.modifTacheForm.valid ){
      this.service.update(this.tache.id, this.modifTacheForm.value).subscribe((tache) => {
        this.displayForm(tache);
      });
    }
    else
      alert('form invalide')
  }

  displayForm(tache: Tache) {
    this.tache = tache;
        this.modifTacheForm.patchValue({
          intitule: tache.intitule,
          description: tache.description,
          priorite: tache.priorite,
          deadLine: tache.deadline
        })
  }

}
