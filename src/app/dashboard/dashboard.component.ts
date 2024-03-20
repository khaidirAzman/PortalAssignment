import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {AsyncPipe, NgClass, NgIf, SlicePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {InputSwitchModule} from "primeng/inputswitch";
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {data, Task} from "../../data";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    UpperCasePipe,
    TableModule,
    NgClass,
    SlicePipe,
    PaginatorModule,
    InputSwitchModule,
    SidebarModule,
    ButtonModule,
    AsyncPipe,
    TitleCasePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges{
  @ViewChild('high') highFilter: ElementRef | undefined;
  tasks = data;
  tasksCopy = data;

  startPage:number = 0;
  endPage: number = 10;

  filterHigh = true;
  filterMedium = true;
  filterLow = true;

  tasks$: Observable<Task[]> | undefined;
  constructor() {
    this.tasks$ = of(this.tasks).pipe(
    );
  }
  ngOnChanges(): void {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }
  getStatusClassPriority(priority: string){
    return priority === 'high' ? 'highPriority' :
      (priority === 'medium' ? 'mediumPriority' : 'lowPriority');
  }
  getStatusClassCategory(category: string){
    return category === 'personal' ? 'personalCategory' : 'workCategory';
  }
  getTotalRecords(){
    return Math.ceil(this.tasks.length/10);
  }
  onPageChange(event: PaginatorState) {
    this.startPage = event.page!*10;
    this.endPage = this.startPage+ 10;
  }
  applyFilter(){
    if(!this.filterHigh || !this.filterMedium || !this.filterLow){
      this.tasks = this.tasksCopy;
      if(!this.filterHigh){
        this.tasks = this.tasks.filter(task=> task.priority !== 'high');
      }
      if(!this.filterMedium){
        this.tasks = this.tasks.filter(task=> task.priority !== 'medium');
      }
      if(!this.filterLow){
        this.tasks = this.tasks.filter(task=> task.priority !== 'low');
      }
    } else {
      this.tasks = this.tasksCopy;
    }
  }
  ngOnDestroy(): void {
  }
}
