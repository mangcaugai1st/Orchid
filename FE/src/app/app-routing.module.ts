import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {GenusComponent} from "./components/genus/genus.component";
import {SpeciesComponent} from "./components/genus/species/species.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'Genus', title: 'Chi', component: GenusComponent},
  {path: 'Genus/:id', title: 'Species', component: SpeciesComponent},
  {path: '**', title: 'Error', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
