import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Todo, TodoInsert } from "../models/todo.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodosApi {
  constructor(private http: HttpClient) {}

  list(search: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiBaseUrl}/todos?search=${search}`);
  }

  create(todo: TodoInsert): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiBaseUrl}/todos`, { title: todo.title });
  }
}
