import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadosComponent } from './empleado/empleado.component';
import { PersonasComponent } from './persona/personas.component';
import { HomeComponent } from './Home/home.component';
import { ContactoComponent } from './Contacto/contacto.component';
import { ParametrosURLComponent } from './ParametrosURL/parametrosURL.component';
import { CarroComponent } from './carros/carro.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

import { ConversorPipe } from './pipes/conversor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    PersonasComponent,
    HomeComponent,
    ContactoComponent,
    ParametrosURLComponent,
    ConversorPipe,
    CarroComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
