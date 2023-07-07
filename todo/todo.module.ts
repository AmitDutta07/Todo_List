import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

// Import Ngx-Pagination :
import { NgxPaginationModule } from 'ngx-pagination';

// Import 2 way: FormsModule:
import { FormsModule } from '@angular/forms';
import { TodoFilterPipe } from './todo-filter.pipe';


@NgModule({
  declarations: [
    TodoComponent,
    TodoFilterPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class TodoModule { }
