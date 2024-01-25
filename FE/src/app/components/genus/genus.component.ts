import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Genus} from "../../Models/genus.model";
import {environment} from  "../../../environments/environment.development";

@Component({
  selector: 'app-genera',
  templateUrl: './genus.component.html',
  styleUrls: ['./genus.component.css']
})
export class GenusComponent {
  constructor(private http : HttpClient) {

  }
  ngOnInit() {
    this.http.get<Genus[]>(environment.api_domain+"Genus").subscribe({
        next: (genus) => {
          this.genus= genus
          console.log(this.genus)
        },
    })
  }
  genus : Genus[] = [];
}
