import { Component, OnInit } from '@angular/core';
import { Usersdata } from '../core/services/users';
import { DatabaseService } from '../core/services/database.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private _fire: any;
  persons: any;

  constructor(public _data: DatabaseService) { }


//add users function

Addusers(UserData : NgForm) {

  this._data.Addusers(UserData.value)
  // this._fire.collection('Users').add(data).then(results => {
  //   console.log('successfully added user')
  // }).catch(err => {
  //   console.log('Err occured:', err)
  // });
  // Get Data from firestore
}

  ngOnInit() {

    this._data.GetUsers().snapshotChanges().subscribe(action => {
      console.log(action);
      this.persons = action;
    })

  }

}
