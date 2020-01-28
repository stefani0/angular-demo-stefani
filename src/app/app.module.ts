import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AppHeaderModule,
  AppSidebarModule,
  AppFooterModule,
} from '@coreui/angular';
import { DynamicModule } from './modules/dynamic-module/dynamic-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
