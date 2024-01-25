import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
    constructor(private route: ActivatedRoute) {

    }
  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
  }
}
