import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path: environment.projectName,
    component: AppComponent,
    data: {
      title: environment.projectName
    },
    children: [{
      path: 'Angular_Demo/dynamic',
      loadChildren: () => import('./modules/dynamic-module/dynamic-module.module').then(m => m.DynamicModule)
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
