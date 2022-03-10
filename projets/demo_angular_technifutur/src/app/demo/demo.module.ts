import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoCommuComponent } from './components/demo-commu/demo-commu.component';
import { DemoCommuEnfantComponent } from './components/demo-commu-enfant/demo-commu-enfant.component';
import { ChildTextDirectiveDirective } from './directives/child-text-directive.directive';
import { GreenBgDirective } from './directives/green-bg.directive';
import { Part21DirectiveDirective } from './directives/part2-1-directive.directive';
import { DemoFormsComponent } from './components/demo-forms/demo-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ObsDemoComponent } from './components/obs-demo/obs-demo.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent,
    DemoDirectiveComponent,
    HighlightDirective,
    DemoCommuComponent,
    DemoCommuEnfantComponent,
    ChildTextDirectiveDirective,
    GreenBgDirective,
    Part21DirectiveDirective,
    DemoFormsComponent,
    ObsDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
