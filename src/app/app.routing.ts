import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES A UTILIZAR PARA LAS URLS

import { EmpleadosComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { PersonasComponent } from './persona/personas.component';
import { HomeComponent } from './Home/home.component';
import { ContactoComponent } from './Contacto/contacto.component';
import { ParametrosURLComponent } from './ParametrosURL/parametrosURL.component';
import { CarroComponent } from './carros/carro.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent}, // LO que cargará cuando la url esté vacia.
	{path: 'empleado', component: EmpleadosComponent},	// El componente que cargará cuando se ponga la url de empleado.
	{path: 'fruta', component: FrutaComponent},			// El componente que cargará cuando se ponga la url de fruta.
	{path: 'persona', component: PersonasComponent},	// El componente que cargará cuando se ponga la url de persona.
	{path: 'home', component: HomeComponent},	// El componente que cargará cuando se ponga la url de home.
	{path: 'parametros', component: ParametrosURLComponent},	// El componente que cargará cuando se ponga la url de parámetros.
	{path: 'parametros/:page', component: ParametrosURLComponent},	// El componente que cargará cuando se ponga la url de parámetros con variable por URL.
	{path: 'carros', component: CarroComponent},	//El componente que cargará cuando se ponga la url de carros.
	{path: 'plantillas', component: PlantillasComponent},	//El componente que cargará cuando se ponga la url de carros.
	{path: '**', component: ContactoComponent},	// Lo que cargará cuando dé un error, un 404, no encuentre página o etc.

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);