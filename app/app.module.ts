import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabUnoComponent } from './tabla/tab-uno/tab-uno.component';

@NgModule({
  declarations: [
    AppComponent,
    TabUnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
