import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Orchid} from "../../../../Models/orchidData.model";
import {GenusComponent} from "../genus.component";
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
    constructor(private route: ActivatedRoute, private http : HttpClient, private titleService:Title) {
      this.titleService.setTitle(this.route.snapshot.params["id"]);
    }
  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    this.http.get<Orchid[]>(environment.api_domain+"Orchids/" + this.route.snapshot.params["id"]).subscribe({
      next: (species) => {
        this.species = species;
        console.log(species);
      }
    })
  }
  species : Orchid[] = [];
  protected readonly GenusComponent = GenusComponent;
  genus_name : string = this.route.snapshot.params["id"];
}
