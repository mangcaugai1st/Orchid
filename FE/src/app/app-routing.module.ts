import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/End_user/home/home.component";
import {GenusComponent} from "./components/End_user/genus/genus.component";
import {SpeciesComponent} from "./components/End_user/genus/species/species.component";
import {SpeciesSpecificComponent} from "./components/End_user/genus/species/species-specific/species-specific.component";

import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {ContactComponent} from "./components/End_user/contact/contact.component";

import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
// Admin section
import {OverviewComponent} from "./components/Admin/overview/overview.component";
import {SpeciesByGenusComponent} from "./components/Admin/overview/species-by-genus/species-by-genus.component";
import { EditGenusComponent } from './components/Admin/overview/edit-genus/edit-genus.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'Sign-in', title: 'Đăng nhập', component: SignInComponent},
  {path: 'Sign-up', title: 'Đăng ký', component: SignUpComponent},
  {path: 'Genus', title: 'Chi', component: GenusComponent},
  {path: 'Genus/:id', component: SpeciesComponent},
  {path: 'Genus/:species/:specific_species', component: SpeciesSpecificComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Admin/overview', title: 'Overview', component: OverviewComponent},
  {path: 'Admin/overview/species-by-genus/:genus_name', component: SpeciesByGenusComponent},
  {path: 'Admin/overview/edit_genus/:genus_name', component: EditGenusComponent},

  {path: '**', title: 'Error', component: PageNotFoundComponent, pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
