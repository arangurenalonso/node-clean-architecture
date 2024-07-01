import GetAllTodosQuery from '@application/features/todos/query/getAll/GetAllTodos.query';
import GetAllTodosQueryHandler from '@application/features/todos/query/getAll/GetAllTodos.query.handler';
import ITodoRepository from '@domain/repositories/ITodos.repository';
import TodoDomain from '@domain/todos/Todo.domain';
import TodoRepository from '@infrastructure/repository/Todo.repository.impl';
import TodosController from '@presentation/rest/controllers/todos.controller';
import ExpressServer from '@presentation/rest/express.server';
import ApiRouter from '@presentation/rest/routes/api.router';
import TodoRoutes from '@presentation/rest/routes/todos/todo.routes';
import express, { Application, Router } from 'express';
import { Container } from 'inversify';
import { Mediator, IRequestHandler } from 'mediatr-ts';
import TYPES from './identifiers';

class DependencyContainer {
  private readonly _container: Container;

  constructor() {
    this._container = new Container();
    this.setupDependencies();
  }

  private setupDependencies(): void {
    this.bindRepositories();
    this.bindQueries();
    this.bindRouters();
    this.bindControllers();
    this.bindCore();
    this.bindServer();
  }

  private bindCore(): void {
    this._container
      .bind<Application>(TYPES.Application)
      .toConstantValue(express());

    this._container
      .bind<Router>(TYPES.Router)
      .toDynamicValue(() => express.Router());

    this._container
      .bind<Mediator>(TYPES.Mediator)
      .toConstantValue(new Mediator());
  }

  private bindControllers(): void {
    this._container
      .bind<TodosController>(TYPES.TodosController)
      .to(TodosController);
  }

  private bindRouters(): void {
    this._container.bind<TodoRoutes>(TYPES.TodoRoutes).to(TodoRoutes);
    this._container.bind<ApiRouter>(TYPES.ApiRouter).to(ApiRouter);
  }

  private bindServer(): void {
    this._container.bind<ExpressServer>(TYPES.ExpressServer).to(ExpressServer);
  }
  private bindRepositories(): void {
    this._container
      .bind<ITodoRepository>(TYPES.ITodoRepository)
      .to(TodoRepository);
  }
  private bindQueries(): void {
    this._container
      .bind<IRequestHandler<GetAllTodosQuery, TodoDomain[]>>('GetAllTodosQuery')
      .to(GetAllTodosQueryHandler);
  }

  public container(): Container {
    return this._container;
  }
}
export default DependencyContainer;
