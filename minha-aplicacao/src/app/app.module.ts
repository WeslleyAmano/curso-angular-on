import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ExercicioDataBindingComponent } from './exercicio-binding/exercicio-binding.component';
import { footerComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './exercicio-ngclass/exercicio-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    footerComponent,
    ContadorComponent,
    ExercicioDataBindingComponent,
    HeaderComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
