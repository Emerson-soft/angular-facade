import { Injectable } from "@angular/core";
import { TodosApi } from "./api/todos.api";
import { TodosState } from "./state/todos.state";
import { Observable, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { Todo, createTempTodo, isTodoTitleValid } from "./models/todo.model";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class TodosFacade {
  constructor(
    private api: TodosApi,
    private state: TodosState,
    private toastr: ToastrService
  ) {}

  completedTodos$: Observable<Todo[]> = this.state.completedTodos$;
  uncompletedTodos$: Observable<Todo[]> = this.state.uncompletedTodos$;

  listenToSerachChanges(search$: Observable<string>): void {
    search$.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      switchMap((search) => this.api.list(search))
    )
    .subscribe(todos => this.state.todos = todos)
  }

  addTodo(title: string): void {
    if (isTodoTitleValid(title)) {
      const temTodo = createTempTodo(title);
      this.state.addTodo(temTodo);

      this.api.create(temTodo).subscribe({
        next: (todo) => {
          this.state.updateId(todo, temTodo.id)
          this.toastr.success('Todo added successfully')
        },
        error: (e) => {
          this.state.removeTodo(temTodo.id);
          console.log('Error', e)
        }
      })
    }
  }

  toggleCompleted(id: string, isCompleted: boolean): void {
    this.state.toggleCompleted(id, isCompleted);
  }
}
