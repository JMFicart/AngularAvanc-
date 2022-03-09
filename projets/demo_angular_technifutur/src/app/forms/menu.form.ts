import { Validators } from "@angular/forms"

export const MENU_FORM = {
    'produit' : ['',[Validators.required, Validators.minLength(1)]],
    'quantity' : [0, [Validators.required, Validators.min(0)]],
}

