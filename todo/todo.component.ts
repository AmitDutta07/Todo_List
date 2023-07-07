import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoApiService } from '../todo-api.service';

// Import Todo Model :
import { TodoList } from './Model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public TodoList:any=[];
  public startPage:number=1;
  public totalTodos:any='';
  public searchedTodo:any='';
  public newTodo:any=[];
  public selectedTodo:any=[];
  public loggedUser:any=[];

  constructor(private tService:TodoApiService, private route:Router) { 
    this.newTodo=new TodoList('','',this.tService.getDate());
  }

  ngOnInit(): void {
    this.populateTodos();
  }

  populateTodos(){
    this.tService.getAllTods().subscribe((res:any)=>{
      // console.log(res);
      this.TodoList=res;
      console.log(this.TodoList);
      this.totalTodos=res.length;
      if(localStorage.getItem('User')){
      this.loggedUser=localStorage.getItem('User');
      }
    });
  }

  select(todo:any){
    // console.log(todo)
   this.selectedTodo=todo;
   console.log(this.selectedTodo);
   this.newTodo=new TodoList
   (this.selectedTodo.title,this.selectedTodo.description,this.tService.getDate());
  }

  AddTodo(){
console.log(this.newTodo);
this.tService.AddNewTodo(this.newTodo).subscribe((res:any)=>{
  console.log(res);
  alert(res.msg);
  this.populateTodos();
});
 }

 OnUpdate(){
  this.tService.UpdateTodo(this.selectedTodo._id,this.newTodo).subscribe((res:any)=>{
    console.log(res.msg);
    alert(res.msg);
    this.populateTodos();

  });
 }

 OnDelete(){
 this.tService.DeleteTodo(this.selectedTodo._id).subscribe((res:any)=>{
  console.log(res.msg)
  alert(res.msg);
  this.populateTodos();
 });
 }
 // Log Out User:
 logOut(){
  localStorage.clear();
   this.route.navigateByUrl('/user');
 }
}
