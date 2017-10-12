import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component'
import {PersonaComponent} from './persona/persona.component'
import { YoutubeComponent } from './youtube/youtube.component';

const appRoutes: Routes = [
    {path:'', component:InicioComponent},
    {path:'persona', component:PersonaComponent},
    {path:'buscar', component:YoutubeComponent}
];

export const appRoutingProviders:any[] = [];
export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

