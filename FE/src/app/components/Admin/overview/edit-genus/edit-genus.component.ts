import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../../environments/environment";
import {Genus} from "../../../../Models/genus.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-genus',
  templateUrl: './edit-genus.component.html',
  styleUrls: ['./edit-genus.component.css']
})
export class EditGenusComponent {
  constructor(private route: ActivatedRoute,private http: HttpClient, private titleServie: Title) {

  }
  ngOnInit() {
    this.http.get<Genus>(environment.api_domain+"Genus/"+this.route.snapshot.params["genus_name"]).subscribe({
      next: (genus) => {
        this.genus= genus
        console.log(this.genus)
      },
    })
  }
  genus : Genus;

}
