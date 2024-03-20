import {Component, inject, OnInit} from '@angular/core';
import {HttpService} from "../http.service";
import {AsyncPipe, NgIf, JsonPipe} from "@angular/common";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-backend-integration',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    JsonPipe,
    CardModule
  ],
  templateUrl: './backend-integration.component.html',
  styleUrl: './backend-integration.component.css'
})
export class BackendIntegrationComponent implements OnInit{
  httpService = inject(HttpService);
  data$ = this.httpService.getData();
  constructor() {
  }
  ngOnInit(): void {
  }
}
