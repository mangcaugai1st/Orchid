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
import { ContactComponent } from './components/End_user/contact/contact.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import { OverviewComponent } from './components/Admin/overview/overview.component';
import { SpeciesByGenusComponent } from './components/Admin/overview/species-by-genus/species-by-genus.component';

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
    ContactComponent,
    SignUpComponent,
    OverviewComponent,
    SpeciesByGenusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
