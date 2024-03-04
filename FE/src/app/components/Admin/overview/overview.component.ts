import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Genus} from "../../../Models/genus.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }

  constructor(private http : HttpClient) {

  }
  ngOnInit() {
    this.http.get<Genus[]>(environment.api_domain + "Genus")
        .subscribe
        ({
          next: (genus) => {
            this.genus = genus
          },
        })
  }
  genus: Genus[] = [];
}
