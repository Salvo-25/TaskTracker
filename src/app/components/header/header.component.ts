import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  title = 'taskTracker';
  showAddTask : boolean = true;
  subsription : Subscription;
  
  constructor(private uiService : UiService, private router : Router){ 
    this.subsription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void { 

  }
  toggleAddTask(){
    this.uiService.toogleAddTask();
  }

  hasRoute(route : string){
    return this.router.url === route;
  }
}
