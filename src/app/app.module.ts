import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
