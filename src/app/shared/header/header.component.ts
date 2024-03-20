import {Component, inject, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {DockModule} from "primeng/dock";
import {NgIf, TitleCasePipe} from "@angular/common";
import {AuthService} from "../../auth.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {BreadcrumbModule} from "primeng/breadcrumb";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    DockModule,
    NgIf,
    FormsModule,
    BreadcrumbModule,
    TitleCasePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  authService = inject(AuthService);
  router = inject(Router);
  user: any;
  items: MenuItem[] | undefined;

  constructor() {
  }
  ngOnInit(): void {
    this.items =
      [
        {
          label: 'Home',
          routerLink: '/'
        },
        {
          label: 'Dashboard',
          routerLink: '/dashboard'
        },
        {
          label: 'Task Management',
          routerLink: '/task'
        },
        {
          label: 'Backend Integration',
          routerLink: '/backend'
        }
      ];
    this.user = this.authService.getSession();
  }
  logoutUser() {
    this.authService.logout();
  }
  getUrl(){
    let path = this.router.url.slice(1);
    if (path === '') {
      return 'Home'
    } else {
      return path;
    }
  }
}
