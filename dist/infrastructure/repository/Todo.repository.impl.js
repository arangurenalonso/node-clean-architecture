"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const Todo_domain_1 = __importDefault(require("../../core/domain/todos/Todo.domain"));
let TodoRepository = class TodoRepository {
    constructor() {
        this.todos = [
            new Todo_domain_1.default({
                id: '1',
                title: 'Todo 1',
                description: 'Description 1',
                completed: false,
                start: new Date(),
                end: new Date(),
            }),
            new Todo_domain_1.default({
                id: '2',
                title: 'Todo 2',
                description: 'Description 2',
                completed: false,
                start: new Date(),
                end: new Date(),
            }),
        ];
    }
    async getAll() {
        return this.todos;
    }
    async save(newTodo) {
        this.todos.push(newTodo);
    }
};
TodoRepository = __decorate([
    (0, inversify_1.injectable)()
], TodoRepository);
exports.default = TodoRepository;
