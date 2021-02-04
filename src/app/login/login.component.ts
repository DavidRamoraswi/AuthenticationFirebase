import { Component, OnInit } from '@angular/core';
import { Usersdata } from '../core/services/users';
import { DatabaseService } from '../core/services/database.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {
  // private _data: any;
  persons: any;


  // 
  constructor(public _data: DatabaseService) { }

LogIn(UseerData : NgForm){
    this._data.LogIn(UseerData.value.email,UseerData.value.password);

  }


  ngOnInit() {
    // this._data.Register(email,password);
    //  this._data.login(email,password);
   
   
       //  display data
      //  this._data.GetUsers().snapshotChanges().subscribe(action => {
      //    console.log(action);
      //    this.persons = action;
   
      //    action.map(element => {
      //      const Usersinfo = element as unknown as Usersdata;
      //      console.log(Usersinfo.name)
      //    })
   
   
      //    if (this.persons.name == "tyson") {
      //      console.log('is available');
      //    }
      //  })
}
}
