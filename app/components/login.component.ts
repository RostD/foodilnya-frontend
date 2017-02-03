import {Component, OnInit} from "@angular/core";
import {AuthUserService} from "../services/authuser.service";
import {Router} from "@angular/router";
@Component({
  selector:'login',
  templateUrl: 'app/components/login.component.html'
})
export class LoginComponent implements OnInit{

  constructor(private auth: AuthUserService,private router: Router){}

  ngOnInit(): void {
    if(this.auth.isLoginned()){
      this.router.navigate(['']);
    }
  }
}
