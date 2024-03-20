import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)
  users: any[] = [
    {
      name: 'Khaidir',
      role:'admin',
      username: 'khaidir',
      password: 'abc123'
    },
    {
      name: 'David',
      role:'user',
      username: 'david',
      password: 'abc123'
    },
    {
      name: 'Ahmad',
      role:'user',
      username: 'ahmad',
      password: 'abc123'
    }
  ];
  session: any;
  constructor() { }

  getSession() {
    let session = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    }
    return session;
  }
  login(username: string, password: string){
    let user = this.users.find((u)=>u.username === username && u.password === password);
    if(user){
      this.session = user;
      let nameRole = {name: user.name, role: user.role}
      localStorage.setItem('session', JSON.stringify(nameRole));
    }
    return user;
  }
  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/').then(r => console.log(r));
    location.reload();
  }
}
