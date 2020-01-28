import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button-component/button-component.component';


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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicModuleRoutingModule { }
