import { Validators } from "@angular/forms"

export const AJOUTTACHE_FORM = {
    'intitule' : ['',[Validators.required, Validators.minLength(1)]],
    'description' : [],
    'datecreation' : ['', [Validators.required]],
    'deadline' : [''],
    'datetermine' : [''],
    'priorite' : ['',[Validators.required, Validators.minLength(1)]]
}

