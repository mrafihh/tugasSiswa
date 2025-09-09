import { Todo } from './todos.interface';
export declare class TodoService {
    private todos;
    findAll(): Todo[];
    findOne(id: number): Todo;
    create(todo: Todo): Todo;
    update(id: number, updatedTodo: Partial<Todo>): Todo;
    remove(id: number): void;
}
