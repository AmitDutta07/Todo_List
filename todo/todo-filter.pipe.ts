import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Filter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(AllTodos:any,searchedTodo:any):any {
    if(searchedTodo.length>=3){
    let searchedData=AllTodos.filter((item:any)=>{
      return (item.title.trim().toLowerCase().includes(searchedTodo.trim().toLowerCase()))
    });
    return searchedData;
    }
    return AllTodos;
  }
}
