import { Taches } from "./taches.model";

export interface AjoutTacheEvent {
    task: Taches,
    up: boolean
}