import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import {Router} from "@angular/router";
import {User} from "../../Models/user.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    user: any = {};
  constructor (private http : HttpClient, private router: Router )
  {

  }
  ngOnInit() {
  }

}
