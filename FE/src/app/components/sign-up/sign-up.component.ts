import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  user : any = {};
  a : boolean = true;
  b : boolean = true;
  constructor(private  http : HttpClient) {

  }
  ngOnInit() {

  }
  Register() {
    if (this.user.password != this.user.password1) {
      this.a = false;
      this.b = true;
    }
    if (this.user.password1 == null)
    {
      this.a = true;
      this.b = false;
    }
    this.http.post<any>(environment.api_domain + "Users",this.user).subscribe({
      next : (sucess) => console.log((sucess))
    })
    console.log(this.user);
  }
}
