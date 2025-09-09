"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = class TodoService {
    todos = [
        { id: 1, title: 'Belajar NestJS', status: 'pending' },
        { id: 2, title: 'Tugas NestJS', status: 'done' },
    ];
    findAll() {
        return this.todos;
    }
    findOne(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (!todo)
            throw new common_1.NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
        return todo;
    }
    create(todo) {
        const newTodo = { ...todo, id: this.todos.length + 1 };
        this.todos.push(newTodo);
        return newTodo;
    }
    update(id, updatedTodo) {
        const todo = this.findOne(id);
        Object.assign(todo, updatedTodo);
        return todo;
    }
    remove(id) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1)
            throw new common_1.NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
        this.todos.splice(index, 1);
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todos.service.js.map