import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { routing } from './app.routing';
import { PanicComponent } from './panic/panic.component';
import { WaitComponent } from './wait/wait.component';
import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GoodComponent,
    BadComponent,
    PanicComponent,
    WaitComponent,
    NameComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
