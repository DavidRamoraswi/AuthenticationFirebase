// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { DatabaseService } from '../../core/services/database.service'
// import { Usersdata } from '../../core/services/users';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit {

//   title = 'Database';
//   persons: any;
//   constructor(public _data: DatabaseService) { }


//   AddUsers(UserData: NgForm) {
//     //add this to our database

//     this._data.Addusers(UserData.value);
//   }



//   // delete user
//   deleteUser(ref) {
//     this._data.deletePersons(ref);
//   }



//   ngOnInit() {

//     //  display data
//     this._data.GetUsers().snapshotChanges().subscribe(action => {
//       console.log(action);
//       this.persons = action;

//       action.map(element => {
//         const Usersinfo = element as unknown as Usersdata;
//         console.log(Usersinfo.name)
//       })


//       if (this.persons.name == "tyson") {
//         console.log('is available');
//       }
//     })

//     // creating a function to filter by name
//   }


// }
