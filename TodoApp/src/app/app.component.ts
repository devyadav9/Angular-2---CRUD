import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `<todo></todo>`
})
export class AppComponent {
  title = 'Angular2-TodoApp';
  Providers : [TodoService]
}
