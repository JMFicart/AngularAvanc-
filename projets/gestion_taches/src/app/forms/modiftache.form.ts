import { Validators } from "@angular/forms"

export interface TacheForm {
    intitule: string,
    description?: string,
    deadLine?: Date,
    priorite: 'bas' | 'moyen' | 'haut'
}

export const MODIFTACHE_FORM = {
    'intitule' : ['',[Validators.required, Validators.minLength(1)]],
    'description' : [],
    'datecreation' : ['', [Validators.required]],
    'deadline' : [''],
    'datetermine' : [''],
    'priorite' : ['basse',[Validators.required, Validators.minLength(1)]]
}

