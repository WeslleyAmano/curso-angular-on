import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './shared/components/contador/contador.component';
import { ExercicioDataBindingComponent } from './shared/components/exercicio-binding/exercicio-binding.component';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './shared/components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';
import { footerComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    footerComponent,
    ContadorComponent,
    ExercicioDataBindingComponent,
    HeaderComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
