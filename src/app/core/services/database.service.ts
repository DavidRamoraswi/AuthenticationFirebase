import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/app';
import { firebase } from '@firebase/app';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // private _route: any;

  constructor(public _fire: AngularFirestore,
    private fireAuth:AngularFireAuth,
    public _route : Router ) {

     }

  //add users function

  Addusers(data) {
   return this._fire.collection('Users').add(data).then(results => {
      console.log('successfully added user')
    }).catch(err => {
      console.log('Err occured:', err)
    });
    // Get Data from firestore
  }
  GetUsers() {
    return this._fire.collection('Users');

  }


  deletePersons(ref) {
    return this._fire.collection('Users').doc(ref).delete().then(results => {
      console.log('successfully deleted')
    }).catch(err => {
      console.log('error occured,  ', err)
    })
  }


  // regiser metho
  Register(email,password){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then( () => {
      console.log('RegistereD Successfully')

      // reirect user to a new page,verify user by coe or email

    }).catch( err => {
      console.log( 'Error', err.message)
      console.log('Error', err.code)
    })
  }

  LogIn(email,password){
    this.fireAuth.signInWithEmailAndPassword(email,password).then( ()=>{
      this._route.navigate(['dashboard/:ref']);
      console.log('Login Successful')
    }).catch(err => {
      console.log('Something went wrong',err.message )
    })
  }


 




 
signOut(){
   this.fireAuth.signOut().then( () =>{
     console.log('SigneD Out Successfully')
   }).catch( err=> {
      console.log('Error', err.message);
   })
}

}
