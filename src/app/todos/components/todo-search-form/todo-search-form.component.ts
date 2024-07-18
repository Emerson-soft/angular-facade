import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-todo-search-form',
  templateUrl: './todo-search-form.component.html',
  styleUrls: ['./todo-search-form.component.scss']
})
export class TodoSearchFormComponent {
  @Input() todoSearchForm!: FormControl;
}
