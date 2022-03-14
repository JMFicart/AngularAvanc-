import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AJOUTTACHE_FORM } from 'src/app/forms/ajouttache.form';
import { TacheService } from 'src/app/services/tacheservice.service';

@Component({
  selector: 'app-ajouttache',
  templateUrl: './ajouttache.component.html',
  styleUrls: ['./ajouttache.component.css']
})
export class AjouttacheComponent implements OnInit {
  ajoutTacheForm: FormGroup;

  constructor(builder: FormBuilder, private service: TacheService, private router: Router) {
    this.ajoutTacheForm = builder.group(AJOUTTACHE_FORM);
    // this.ajoutTacheForm.patchValue({
    //   datecreation: new Date()
    // })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.ajoutTacheForm.value.datecreation = new Date;
    this.service.addTache(this.ajoutTacheForm.value).subscribe({
      complete: () => this.router.navigateByUrl("/listetaches")
    })
    // console.log(this.ajoutTacheForm.value)
  }
}

