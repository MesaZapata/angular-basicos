import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { AgregarComponent } from './dbz/agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
