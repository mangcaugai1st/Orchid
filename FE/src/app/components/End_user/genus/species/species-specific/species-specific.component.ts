import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Orchid} from "../../../../../Models/orchidData.model";
import {Title} from "@angular/platform-browser";
import {formatCurrency} from "@angular/common";


@Component({
  selector: 'app-species-specific',
  templateUrl: './species-specific.component.html',
  styleUrls: ['./species-specific.component.css']
})
export class SpeciesSpecificComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http : HttpClient, private titleService:Title) {
    this.titleService.setTitle(this.route.snapshot.params["species"] +" " + this.route.snapshot.params["specific_species"] );
  }
  ngOnInit() {
    console.log(this.route.snapshot.params["species"]);
    console.log(this.route.snapshot.params["specific_species"]);
    this.http.get<Orchid>(environment.api_domain+"Orchids/" + this.route.snapshot.params["species"] + "/" + this.route.snapshot.params["specific_species"]).subscribe({
        next: (specific_species) => {
          this.specific_species = specific_species;
          console.log(specific_species);
        }
    })
  }
  specific_species : Orchid;
  protected readonly formatCurrency = formatCurrency;
}
