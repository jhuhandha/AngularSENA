import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component'
import {PersonaComponent} from './persona/persona.component'

const appRoutes: Routes = [
    {path:'', component:InicioComponent},
    {path:'persona', component:PersonaComponent}
];

export const appRoutingProviders:any[] = [];
export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

