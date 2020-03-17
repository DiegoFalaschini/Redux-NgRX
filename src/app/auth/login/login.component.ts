import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser;
  loginProccess: boolean;
  error: boolean = false;

  constructor( private authService: AuthService ) {
    this.loginProccess = false;
   }

  ngOnInit() {

    // fake login
    this.user = {
      username: 'diegoFalas',
      email: 'diego@yahoo.com',
      password: 'diego123'
    }
  }

  login() {

    this.loginProccess = true;

    this.authService.login( this.user ).subscribe( 

      (response) => {
        console.log( response );
        this.loginProccess = false;
        this.error = !response;
      },

      ( err ) => {
        console.log('err:', err );
        this.loginProccess = false;
        
      }
    )
  }

}
