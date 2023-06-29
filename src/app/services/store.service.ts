import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public loggedInUser$ = new BehaviorSubject<User| null>(null);

  public pokemon$ = new BehaviorSubject<any[]>([]);



  constructor() { }

  setLoggedInUser(user: User) {
    this.loggedInUser$.next(user);
  }
  logout() {
    this.loggedInUser$.next(null);
  }
  setPokemon(pokemon: any[]) {
    this.pokemon$.next(pokemon);
  }
}
