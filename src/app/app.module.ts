import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ExDataBindingComponent } from './ex-data-binding/ex-data-binding.component';
import { ExContadorComponent } from './ex-contador/ex-contador.component';
import { ExDiretivasComponent } from './ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './ex-ngclass/ex-ngclass.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
