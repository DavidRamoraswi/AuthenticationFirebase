import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { from } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DatabaseService } from '../core/services/database.service';
// import { Usersdata } from './core/services/users';
import { Usersdata } from '../core/services/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  // private _data: any;


//   SignInWithGoogle(){
//     this._data.loginGoogle();
//  }

  constructor(public _data: DatabaseService) { }
  
  Register(UserData : NgForm){

    this._data.Register(UserData.value.email,UserData.value.password);
    
    } 

  ngOnInit() {
    // this._data.lo
  }

}