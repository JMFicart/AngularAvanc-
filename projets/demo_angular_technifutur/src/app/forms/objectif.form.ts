import { Validators } from "@angular/forms"

export const OBJECTIF_FORM = {
    'objectif' : ['',[Validators.required, Validators.minLength(1)]]
}

