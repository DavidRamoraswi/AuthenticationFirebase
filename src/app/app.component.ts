import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DatabaseService } from './core/services/database.service';
import { Usersdata } from './core/services/users';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mlab';
  persons: any;
  constructor(public _data: DatabaseService) { }


  AddUsers(UserData: NgForm) {
    //add this to our database

    this._data.Addusers(UserData.value);
  }



  // delete user
  deleteUser(ref) {
    this._data.deletePersons(ref);
  }



  ngOnInit() {
//  this._data.Register(email,password);
//   this._data.login(email,password);


    //  display data
    // this._data.GetUsers().snapshotChanges().subscribe(action => {
    //   console.log(action);
    //   this.persons = action;

    //   action.map(element => {
    //     const Usersinfo = element as unknown as Usersdata;
    //     console.log(Usersinfo.name)
    //   })


    //   if (this.persons.name == "tyson") {
    //     console.log('is available');
    //   }
    // })

    // creating a function to filter by name
  }
}








