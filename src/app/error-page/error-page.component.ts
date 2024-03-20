import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf, UpperCasePipe} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    UpperCasePipe,
    PaginatorModule,
    ReactiveFormsModule
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

}
