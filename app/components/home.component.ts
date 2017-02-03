
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthUserService} from "../services/authuser.service";
@Component({
  selector: 'home',
  template: `
    <h1>Панель управления</h1>
    <p>Добро пожаловать в панель управления!</p>
`
})
export class HomeComponent implements OnInit{
  constructor(private router:Router, private auth: AuthUserService){}

  ngOnInit(): void {
    if(!this.canShow()) {
      this.router.navigate(['login']);
    }
  }

  canShow(): boolean{
    return this.auth.isLoginned();
  }

}
