import {Component, inject, OnInit} from '@angular/core';
import {InputSwitchModule} from "primeng/inputswitch";
import {DatePipe, NgClass, NgForOf, NgIf, SlicePipe, TitleCasePipe} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {data, Task} from "../../data";
import {CardModule} from "primeng/card";
import {StyleClassModule} from "primeng/styleclass";
import {DockModule} from "primeng/dock";
import {DialogModule} from "primeng/dialog";
import moment from "moment";

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [
    InputSwitchModule,
    NgIf,
    PaginatorModule,
    SharedModule,
    SlicePipe,
    TableModule,
    NgClass,
    ButtonModule,
    ReactiveFormsModule,
    NgForOf,
    CalendarModule,
    CardModule,
    TitleCasePipe,
    StyleClassModule,
    DockModule,
    DialogModule,
    DatePipe
  ],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css'
})
export class TaskManagementComponent implements OnInit{
  fb = inject(FormBuilder);
  priorities = ['high', 'medium', 'low'];
  categories = ['personal', 'work'];
  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required],
    priority: ['', Validators.required],
    category: ['', Validators.required]
  });
  updateTaskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required],
    priority: ['', Validators.required],
    category: ['', Validators.required]
  });

  tasks = data;
  tasksCopy = data;
  editItem: Task | undefined;
  editItemIndex: number = 0;
  visible: boolean = false;

  filterPersonal = true;
  filterWork = true;
  constructor() {
  }
  ngOnInit(): void {
  }
  applyFilter(){
    if(!this.filterPersonal || !this.filterWork){
      this.tasks = this.tasksCopy;
      if(!this.filterPersonal){
        this.tasks = this.tasks.filter(task=> task.category !== 'personal');
      }
      if(!this.filterWork){
        this.tasks = this.tasks.filter(task=> task.category !== 'work');
      }
    } else {
      this.tasks = this.tasksCopy;
    }
  }

  priorityStyleClass(priority: string | null){
    return priority === 'high' ? 'p-button-danger' :
      (priority === 'medium' ? 'p-button-primary' : 'p-button-success');
  }
  categoryStyleClass(category: string | null){
    return category === 'personal' ? 'p-button-help' : 'p-button-info';
  }
  saveNewTask(){
    let task = this.taskForm;
    let newTask: Task = {} as Task;
    newTask.title = task.controls.title.value;
    newTask.description = task.controls.description.value;
    newTask.due = task.controls.dueDate.value;
    newTask.priority = task.controls.priority.value;
    newTask.category = task.controls.category.value;

    this.tasks.unshift(newTask!);
    this.taskForm.reset();
  }
  openUpdateModal(task: Task){
    this.visible = true;
    this.editItem = task;
    this.editItemIndex = this.tasks.indexOf(this.editItem);

    this.updateTaskForm.controls.title.setValue(task.title);
    this.updateTaskForm.controls.description.setValue(task.description);
    this.updateTaskForm.controls.dueDate.setValue(this.dateTransform(task.due));
    this.updateTaskForm.controls.priority.setValue(task.priority);
    this.updateTaskForm.controls.category.setValue(task.category);
  }
  dateTransform(date: string | null | undefined){
    return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
  }
  isSelectedPriority(priority: string | null | undefined){
    return (this.editItem?.priority === priority?.toLowerCase());
  }
  isSelectedCategory(category: string | null | undefined){
    return (this.editItem?.category === category?.toLowerCase());
  }
  updateTask(){
    this.visible = false;
    this.tasks[this.editItemIndex].title = this.updateTaskForm.controls.title.value;
    this.tasks[this.editItemIndex].description = this.updateTaskForm.controls.description.value;
    this.tasks[this.editItemIndex].due = this.updateTaskForm.controls.dueDate.value;
    this.tasks[this.editItemIndex].priority = this.updateTaskForm.controls.priority.value;
    this.tasks[this.editItemIndex].category = this.updateTaskForm.controls.category.value;
    this.updateTaskForm.reset();
    this.editItem =  {} as Task;
  }
  deleteTask(task: Task){
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
