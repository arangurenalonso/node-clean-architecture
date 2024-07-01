"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GetAllTodos_query_handler_1 = __importDefault(require("../core/application/features/todos/query/getAll/GetAllTodos.query.handler"));
const Todo_repository_impl_1 = __importDefault(require("../infrastructure/repository/Todo.repository.impl"));
const todos_controller_1 = __importDefault(require("../presentation/rest/controllers/todos.controller"));
const express_server_1 = __importDefault(require("../presentation/rest/express.server"));
const api_router_1 = __importDefault(require("../presentation/rest/routes/api.router"));
const todo_routes_1 = __importDefault(require("../presentation/rest/routes/todos/todo.routes"));
const express_1 = __importDefault(require("express"));
const inversify_1 = require("inversify");
const mediatr_ts_1 = require("mediatr-ts");
const identifiers_1 = __importDefault(require("./identifiers"));
const EnvironmentConfig_1 = __importDefault(require("./EnvironmentConfig"));
class DependencyContainer {
    constructor() {
        this._container = new inversify_1.Container();
        this.setupDependencies();
    }
    setupDependencies() {
        this.bindRepositories();
        this.bindQueries();
        this.bindRouters();
        this.bindControllers();
        this.bindCore();
        this.bindServer();
    }
    bindCore() {
        this._container
            .bind(identifiers_1.default.Application)
            .toConstantValue((0, express_1.default)());
        this._container
            .bind(identifiers_1.default.Router)
            .toDynamicValue(() => express_1.default.Router());
        this._container
            .bind(identifiers_1.default.Mediator)
            .toConstantValue(new mediatr_ts_1.Mediator());
        this._container
            .bind(identifiers_1.default.EnvironmentConfig)
            .to(EnvironmentConfig_1.default);
    }
    bindControllers() {
        this._container
            .bind(identifiers_1.default.TodosController)
            .to(todos_controller_1.default);
    }
    bindRouters() {
        this._container.bind(identifiers_1.default.TodoRoutes).to(todo_routes_1.default);
        this._container.bind(identifiers_1.default.ApiRouter).to(api_router_1.default);
    }
    bindServer() {
        this._container.bind(identifiers_1.default.ExpressServer).to(express_server_1.default);
    }
    bindRepositories() {
        this._container
            .bind(identifiers_1.default.ITodoRepository)
            .to(Todo_repository_impl_1.default);
    }
    bindQueries() {
        this._container
            .bind('GetAllTodosQuery')
            .to(GetAllTodos_query_handler_1.default);
    }
    container() {
        return this._container;
    }
}
exports.default = DependencyContainer;
