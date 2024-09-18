import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task : Task) : Observable<Task> {
    return this.http.delete<Task>(`${this.apiURL}/${task.id}`)
  }

  updateTaskReminder(task : Task) : Observable<Task>{
    return this.http.put<Task>(`${this.apiURL}/${task.id}`,task)
  }

  addTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.apiURL,task)
  }
}
