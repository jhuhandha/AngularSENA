import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module'

import { Routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { UrlPipe } from './pipes/url.pipe'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonaComponent,
    YoutubeComponent,
    UrlPipe
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
