import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { Todo } from '../Todo';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private dataService:DataserviceService,private router: Router) { }
  data:Todo={
      id:1,
      task:'play cricket',
      status:'completed'
  };
  
  count:number
  todoDataForm: FormGroup;
  gotData:Todo[]
  formData:Todo
  todo:Todo[]=[
    {
      id:1,
      task:'play cricket',
      status:'completed'
    },
    {
      id:2,
      task:'play football',
      status:'pending'
    },{
      id:3,
      task:'completed homework',
      status:'pending'
    }
    
  ]
    
  onSubmit(){
    this.count=this.count+1
    console.log(this.todoDataForm.value)
    this.data.id=this.todo.length+1;
    this.data.task=this.todoDataForm.value.task
    this.data.status=this.todoDataForm.value.status
    this.todo.push(this.data)
    

  }
  onDelete(count){
     console.log(count)
     const index: number = this.todo.indexOf(count);
     this.todo.splice(index)
  //   if (index !== -1) {
  //       this.todo.splice(index, 1);
  //    this.todo.slice(count)
  // }
}

  set dataProperty(data){

    this.dataService.sharedData=data;
  }
   onUpdate(data){
    
    
    this.dataService.sharedData=this.todo;
    this.dataService.id=data
    console.log(this.dataService.sharedData)
    this.datafromservice()
    this.router.navigateByUrl("/update");

  }
   datafromservice(){
     this.gotData = this.dataService.sharedData
     console.log(this.gotData)
  }

  ngOnInit() {
    
    this.todoDataForm = new FormGroup({
      task:new FormControl('',Validators.required),
      status:new FormControl('',Validators.required)
    })


    console.log("came")
    console.log(this.todo)
    this.gotData=this.dataService.sharedData
    // this.todo.forEach((varTodo)=>{
    //   if(this.gotData!=undefined){
    //   if(varTodo.id===this.gotData.id){
    //     console.log("check")
    //     console.log(this.gotData)
    //     varTodo.status=this.gotData.status
    //     varTodo.task=this.gotData.task
    //   }
    // }
    // })
    
    if(this.gotData!=null){
    this.todo= this.gotData
    }

  }

}
