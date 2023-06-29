import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$ = this.store.loggedInUser$;
  constructor(
    private store: StoreService
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.store.setLoggedInUser({
      name: 'John Doe',
      email: 'j'+Math.random()+'@gmail.com'})
  }
  logout(){
    this.store.logout();
  }
}
