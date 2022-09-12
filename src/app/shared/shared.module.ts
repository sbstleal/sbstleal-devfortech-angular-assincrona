import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExContadorComponent } from './components/ex-contador/ex-contador.component';
import { ExDataBindingComponent } from './components/ex-data-binding/ex-data-binding.component';
import { ExDiretivasComponent } from './components/ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './components/ex-ngclass/ex-ngclass.component';
import { ExPipesComponent } from './components/ex-pipes/ex-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExDataBindingComponent,
    ExContadorComponent,
    ExDiretivasComponent,
    ExNgclassComponent,
    ExPipesComponent,
  ],
  imports: [CommonModule, RouterModule],

  exports: [
    HeaderComponent,
    FooterComponent,
    ExDataBindingComponent,
    ExContadorComponent,
    ExDiretivasComponent,
    ExNgclassComponent,
    ExPipesComponent,
    RouterModule
  ],
})
export class SharedModule {}
