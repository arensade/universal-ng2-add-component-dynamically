import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import {HomeComponent} from "./+home/home.component";



@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule,
  ],
  entryComponents:[HomeComponent]
})
export class AppModule {
}

export { AppComponent } from './app.component';
