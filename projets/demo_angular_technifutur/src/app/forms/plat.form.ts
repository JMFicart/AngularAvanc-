import { Validators as V } from "@angular/forms"

export const PLAT_FORM = {
    'id' : [1,[V.required, V.min(1)]],
    'nom' : ['', [V.required, V.minLength(1)]],
    'type' : ['', [V.required, V.minLength(1)]],
    'prix' : [0,[V.required, V.min(0)]],
}
