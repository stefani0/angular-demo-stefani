import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button-component/button-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable-component/datatable-component.component';
import { DynamicTemplateComponent } from './dynamic-template/dynamic-template.component';


const routes: Routes = [
  {
    path: 'Angular_Demo',
    data: {
      title: 'Dynamic'
    },
    children: [
      {
        path: 'dynamic/button',
        component: ButtonComponent,
        data: {
          title: 'button'
        },
      },  
      {
        path: 'dynamic/table',
        component: DatatableComponent,
        data: {
          title: 'button'
        },
      },
      {
        path: 'dynamic/template',
        component: DynamicTemplateComponent,
        data: {
          title: 'button'
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class DynamicModuleRoutingModule { }
