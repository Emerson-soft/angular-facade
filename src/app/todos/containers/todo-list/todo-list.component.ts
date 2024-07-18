import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { TodosFacade } from "../../todos.facade";
import { formChangesUntilDestroyed } from "../../../shared/helpers/form-changes-until-destroyed/form-changes-until-destroyed";
import { FormControl, Validators } from "@angular/forms";
import { Todo } from "../../models/todo.model";

@UntilDestroy()
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public todoAddForm = new FormControl('', Validators.required);
  public searchForm = new FormControl();

  todosTrackFn = (index: number, todo: Todo) => todo.id;

  constructor(public facade: TodosFacade) {}

  ngOnInit(): void {
    const search$ = formChangesUntilDestroyed(this, this.searchForm)
    this.facade.listenToSerachChanges(search$);
  }

  addTodo(title: string): void {
    this.facade.addTodo(title)
    this.todoAddForm.reset();
  }
}
