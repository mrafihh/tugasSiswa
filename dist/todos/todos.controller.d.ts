import { TodoService } from './todos.service';
import { Todo } from './todos.interface';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodoService);
    findAll(): Todo[];
    findOne(id: string): Todo;
    create(todo: Todo): Todo;
    update(id: string, todo: Partial<Todo>): Todo;
    remove(id: string): void;
}
