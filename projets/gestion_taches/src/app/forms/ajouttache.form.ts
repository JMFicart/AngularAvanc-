import { Validators } from "@angular/forms"

export const AJOUTTACHE_FORM = {
    'description' : ['',[Validators.required, Validators.minLength(1)]],
    'datecreation' : ['', [Validators.required]],
    'deadline' : ['', [Validators.required]],
    'datetermine' : [''],
    'priorite' : ['',[Validators.required, Validators.minLength(1)]]
}

