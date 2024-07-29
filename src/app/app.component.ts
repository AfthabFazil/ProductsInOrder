import { Component, Input, input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { Product } from './interface/appInterfaces';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from "./ui/cards/navbar/navbar.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, HomeComponent, LoginComponent, ContactComponent, NavbarComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public api: HeroService){

  }
}