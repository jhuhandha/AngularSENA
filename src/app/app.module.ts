import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
