import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModuleRoutingModule } from './dynamic-module-routing.module';
import { ButtonComponent } from './button-component/button-component.component';
import { DatatableComponent } from './datatable-component/datatable-component.component';


@NgModule({
  declarations: [ButtonComponent, DatatableComponent],
  imports: [
    CommonModule,
    DynamicModuleRoutingModule
  ]
})
export class DynamicModule { }
