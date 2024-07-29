import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  isAdmin(): boolean{
    return false;
  }
}
