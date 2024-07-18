import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { Todo } from "../models/todo.model";


@Injectable({ providedIn: 'root' })
export class TodosState {

  private readonly _todos = new BehaviorSubject<Todo[]>([]);

  public get todos$(): Observable<Todo[]> {
    return this._todos.asObservable();
  }

  public get completedTodos$(): Observable<Todo[]> {
    return this.todos$.pipe(
      map(todos => todos.filter(todo => todo.isCompleted))
    )
  }

  public get uncompletedTodos$(): Observable<Todo[]> {
    return this.todos$.pipe(
      map(todos => todos.filter(todo => !todo.isCompleted))
    )
  }

  get todos(): Todo[] {
    return this._todos.getValue();
  }

  public getById(id: string): Todo {
    return this.todos.find(t => t.id === id)!;
  }

  set todos(val: Todo[]) {
    this._todos.next(val);
  }

  public addTodo(todo: Todo): Todo {
    const currentValue = this.todos
    this.todos = [...currentValue, todo]
    return todo;
  }

  public updateId(todo: Todo, idTemp: string): Todo {
    const index = this.todos.indexOf(this.getById(idTemp));
    this.todos[index] = {
      ...todo
    }

    this.todos = [...this.todos];
    return this.todos[index];
  }

  public removeTodo(id: string): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  public toggleCompleted(id: string, isCompleted: boolean): Todo {
    const todo = this.getById(id);

    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos[index] = {
        ...todo,
        isCompleted
      };
    }

    this.todos = [...this.todos];
    return this.todos[index];

  }
}
