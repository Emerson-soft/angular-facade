import { NgModule } from "@angular/core";
import { TodoListComponent } from "./containers/todo-list/todo-list.component";
import { SharedModule } from "../shared/shered.module";
import { TodosRoutingModule } from "./todos-routing.module";
import { TodosFacade } from "./todos.facade";
import { TodoComponent } from "./components/todo/todo.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TodoAddFormComponent } from "./components/todo-add-form/todo-add-form.component";
import { TodoSearchFormComponent } from "./components/todo-search-form/todo-search-form.component";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent,
    TodoAddFormComponent,
    TodoSearchFormComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TodosRoutingModule
  ],
  providers: [
    TodosFacade
  ]
})
export class TodosModule {}
