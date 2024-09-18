import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  @Input() task : Task;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  constructor(){ }

  ngOnInit(): void { }

  onDelete(task : Task) : void{
    this.onDeleteTask.emit(task)
  }

  onToggle(task : Task) : void{
    this.onToggleReminder.emit(task)
  }
}
