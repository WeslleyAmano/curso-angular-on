import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContadorComponent } from './components/contador/contador.component';
import { ExercicioDataBindingComponent } from './components/exercicio-binding/exercicio-binding.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { footerComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    footerComponent,
    HeaderComponent,
    ContadorComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
        

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    footerComponent,
    HeaderComponent,
    ContadorComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    
  ]

})
export class SharedModule { }
