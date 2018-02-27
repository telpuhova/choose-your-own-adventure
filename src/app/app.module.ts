import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GoodComponent,
    BadComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
