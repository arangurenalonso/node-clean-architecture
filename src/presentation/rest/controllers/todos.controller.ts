import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { Mediator } from 'mediatr-ts';
import TYPES from '@config/identifiers';
import GetAllTodosQuery from '@application/features/todos/query/getAll/GetAllTodos.query';

@injectable()
class TodosController {
  constructor(@inject(TYPES.Mediator) private _mediator: Mediator) {
    //Because we pass the methods as a call back to express, we need to bind the context of the class
    this.getAll = this.getAll.bind(this);
    this.register = this.register.bind(this);
  }

  public async getAll(req: Request, res: Response) {
    const query = new GetAllTodosQuery('Todo ID paso por parametro');
    const todos = await this._mediator.send(query);
    res.json(todos);
  }
  public register(req: Request, res: Response) {
    res.send('Todos los usuarios');
  }
}
export default TodosController;
