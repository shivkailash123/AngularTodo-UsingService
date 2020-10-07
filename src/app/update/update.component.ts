import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo:Todo[]
  varId:number
  task:string
  status:string

  constructor(private dataService:DataserviceService,private router: Router) { }

  ngOnInit() {
     this.todo=this.dataService.sharedData;
     this.varId=this.dataService.id
     console.log(this.todo)
    
     this.todo.forEach((varTodo)=>{
       if(this.varId===varTodo.id){
           this.task = varTodo.task
           this.status=varTodo.status
       }
      })

  }
  onSubmit(todo){
    this.todo.forEach((varTodo)=>{
      if(this.varId===varTodo.id){
         varTodo.task=this.task
         varTodo.status=this.status
      }
     })
    this.dataService.sharedData=this.todo
    this.router.navigateByUrl("/home");
  }

}
