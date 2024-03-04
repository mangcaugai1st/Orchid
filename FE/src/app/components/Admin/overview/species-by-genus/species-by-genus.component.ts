import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Orchid} from "../../../../Models/orchidData.model";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-species-by-genus',
  templateUrl: './species-by-genus.component.html',
  styleUrls: ['./species-by-genus.component.css']
})
export class SpeciesByGenusComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private titleService: Title) {
    this.titleService.setTitle(this.route.snapshot.params["genus_name"]);
  }
  ngOnInit() {
    this.http.get<Orchid[]>(environment.api_domain+"Orchids/"+this.route.snapshot.params["genus_name"]).subscribe(
      {
        next: (species) => {
          this.species = species;
        }
      }
    )
  }
  species : Orchid[] = [];
  genus_name : string = this.route.snapshot.params["genus_name"];
}
