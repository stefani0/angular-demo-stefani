import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicModuleRoutingModule } from './dynamic-module-routing.module';
import { ButtonComponent } from './button-component/button-component.component';
import { DatatableComponent } from './datatable-component/datatable-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [ButtonComponent, DatatableComponent, DynamicTemplateComponent],
  imports: [
    CommonModule,
    DynamicModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'action', component: DynamicTemplateComponent },
      ],
    }),
  ],
  providers: [ReactiveFormsModule]
})
export class DynamicModule { }
