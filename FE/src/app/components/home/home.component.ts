import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Orchid} from "../../Models/orchidData.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private http : HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<Orchid[]>("https://localhost:7252/api/Orchids").subscribe({
      next: (orchidData) => {
        this.orchidData = orchidData
        console.log(this.orchidData)
      },
    })
  }
  orchidData : Orchid[] = [];
}
