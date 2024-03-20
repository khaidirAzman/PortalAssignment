import {Component, OnInit} from '@angular/core';
import {DockModule} from "primeng/dock";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    DockModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  dockItems: MenuItem[] | undefined;
  ngOnInit(): void {
    this.dockItems = [
      {
        label: 'Home',
        icon: "pi-home",
        routerLink: '/'
      },
      {
        label: 'Dashboard',
        icon: "pi-table",
        routerLink: '/dashboard'
      },
      {
        label: 'Task Management',
        icon: "pi-file",
        routerLink: '/task'
      },
      {
        label: 'Backend Integration',
        icon: "pi-sync",
        routerLink: '/backend'
      }
    ];
  }

}
