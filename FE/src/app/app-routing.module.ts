import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/End_user/home/home.component";
import {GenusComponent} from "./components/End_user/genus/genus.component";
import {SpeciesComponent} from "./components/End_user/genus/species/species.component";
import {SpeciesSpecificComponent} from "./components/End_user/genus/species/species-specific/species-specific.component";

import {SignInComponent} from "./components/sign-in/sign-in.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'Sign-in', title: 'Đăng nhập', component: SignInComponent},
  {path: 'Genus', title: 'Chi', component: GenusComponent},
  {path: 'Genus/:id', title: 'Species', component: SpeciesComponent},
  {path: 'Genus/:species/:specific_species', component: SpeciesSpecificComponent},
  {path: '**', title: 'Error', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
