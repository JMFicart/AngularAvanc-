import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoCommuComponent } from "./components/demo-commu/demo-commu.component";
import { DemoDirectiveComponent } from "./components/demo-directive/demo-directive.component";
import { DemoFormsComponent } from "./components/demo-forms/demo-forms.component";
import { ObsDemoComponent } from "./components/obs-demo/obs-demo.component";
import { DemoBindingComponent } from "./demo-binding/demo-binding.component";
import { DemoPipeComponent } from "./demo-pipe/demo-pipe.component";
import { DemoComponent } from "./demo.component";


const routes: Routes = [
    { path:'', component: DemoComponent, children: [
        { path: 'binding', component:DemoBindingComponent },
        { path: 'pipe', component: DemoPipeComponent },
        { path: 'directive', component: DemoDirectiveComponent },
        { path: 'commu', component: DemoCommuComponent },
        { path: 'forms', component: DemoFormsComponent },
        { path: 'observable', component: ObsDemoComponent }
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutingModule{}