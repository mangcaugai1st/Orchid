import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/End_user/header/header.component';
import { FooterComponent } from './components/End_user/footer/footer.component';
import { CarouselComponent } from './components/End_user/carousel/carousel.component';
import { HomeComponent } from './components/End_user/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import { GenusComponent } from './components/End_user/genus/genus.component';
import { SpeciesComponent } from './components/End_user/genus/species/species.component';
import { SpeciesSpecificComponent } from './components/End_user/genus/species/species-specific/species-specific.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    PageNotFoundComponent,
    GenusComponent,
    SpeciesComponent,
    SpeciesSpecificComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
