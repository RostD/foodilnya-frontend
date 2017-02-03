import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { DishlistComponent } from './components/dishlist.component';
import { HomeComponent } from './components/home.component';
import {LoginComponent} from "./components/login.component";


const routes: Routes = [
  {path:'dishlist', component: DishlistComponent},
  {path: 'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouter{}
