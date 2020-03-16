import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModuleRoutingModule } from './dynamic-module-routing.module';
import { ButtonComponent } from './button-component/button-component.component';
import { DatatableComponent } from './datatable-component/datatable-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { GenericSelectComponent } from './generic-select/generic-select.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [ButtonComponent, DatatableComponent, DynamicTemplateComponent, GenericSelectComponent, SelectComponentComponent],
  imports: [
    CommonModule,
    DynamicModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    NgSelectModule,
    FormlyModule.forRoot({
      types: [
        { name: 'action', component: DynamicTemplateComponent },
        { name: 'select', component: GenericSelectComponent },
      ],
    }),
  ],
  providers: [ReactiveFormsModule]
})
export class DynamicModule { }
