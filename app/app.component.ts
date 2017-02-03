import {Component, OnInit} from '@angular/core';
import {AuthUserService} from "./services/authuser.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthUserService){}
  ngOnInit(): void {
  }

  authorized(): boolean{
    return this.auth.isLoginned();
  }
}
