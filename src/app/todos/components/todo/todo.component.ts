import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../../models/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  @Input() todo!: Todo;
  @Output() markComplete = new EventEmitter<boolean>();
  @Output() remove = new EventEmitter<string>();


  onCheckedChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.markComplete.emit(inputElement.checked);
  }

}
