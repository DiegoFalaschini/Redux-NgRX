import { Injectable } from '@angular/core';

import { from, Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { IUser } from "../../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userFake: IUser = {
    username: 'diegoFalas',
    email: 'diego@yahoo.com',
    password: 'diego123'
  }

  constructor() { }

  login( user: IUser): Observable<any> {

    let toSend = false;

    if (JSON.stringify(user) === JSON.stringify( this.userFake) ) {
      toSend = true;
    }
    return of (toSend).pipe( delay(5000) );
  }
}
