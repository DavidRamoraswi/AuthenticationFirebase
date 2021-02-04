// import {Injectable} from '@angular/core';
// import {CoreService} from '../../core/core.service';
// import {HttpClient, HttpParams} from '@angular/common/http';
// import {ConfigService} from '../../core/config.service';
// import {Login} from './user/login';
// import {Register} from './user/register';
// import {Router, RouterStateSnapshot} from '@angular/router';
// import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService extends CoreService {

//   private returnUrl: string;

//   constructor(public http: HttpClient,
//               public configService: ConfigService,
//               private router: Router) {
//     super('users', http, configService);
//     this.returnUrl = '/portal';
//   }

//   public setReturnUrl(returnUrl: string) {
//     this.returnUrl = returnUrl;
//   }

//   public getReturnUrl() {
//     return this.returnUrl;
//   }

//   public getRoles() {

//     const url = this.configService.getApi() + this.type + '/roles';
//     return this.http.get(url);

//   }

//   public getProfile() {

//     const url = this.configService.getApi() + this.type + '/profile';
//     return this.http.get(url);

//   }

//   public login(login: Login) {
//     return this.http.post(this.configService.getApi() + this.type + '/login', login);
//   }


//   public register(register: Register) {
//     return this.http.post(this.configService.getApi() + this.type + '/register', register);
//   }

//   public reset(username: string) {

//     let httpParams = new HttpParams();
//     httpParams = httpParams.set('keyword', username);
//     const url = this.configService.getApi() + this.type + '/resetpassword';
//     return this.http.get(url, {params: httpParams});

//   }

//   public loggedIn(state: RouterStateSnapshot): Observable<boolean> {

//     const url = this.configService.getApi() + this.type + '/loggedin';
//     return this.http.get(url)
//       .map((data: boolean) => {
//         if (data === false) {
//           this.setReturnUrl(state.url);
//           this.router.navigate(['/']);
//         }
//         return data;
//       });

//   }

//   public logout() {

//     const url = this.configService.getApi() + 'users/logout';
//     return this.http.get(url);

//   }





// }
