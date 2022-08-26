import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExContadorComponent } from './ex-contador/ex-contador.component';
import { ExDataBindingComponent } from './ex-data-binding/ex-data-binding.component';
import { ExDiretivasComponent } from './ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './ex-ngclass/ex-ngclass.component';
import { ExPipesComponent } from './ex-pipes/ex-pipes.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

registerLocaleData(localFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ExDataBindingComponent,
    ExContadorComponent,
    ExDiretivasComponent,
    ExNgclassComponent,
    ExPipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
