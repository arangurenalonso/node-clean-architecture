import TYPES from '@config/identifiers';
import TodosController from '@presentation/rest/controllers/todos.controller';
import { Router } from 'express';
import { inject, injectable } from 'inversify';

@injectable()
export class TodoRoutes {
  constructor(
    @inject(TYPES.Router) private readonly _router: Router,
    @inject(TYPES.TodosController)
    private readonly _todosController: TodosController
  ) {
    this.initRoutes();
    this._router = this._router.bind(this);
  }

  private initRoutes(): void {
    this._router.get('/', this._todosController.getAll);
    this._router.post('/', this._todosController.register);
  }
  get router(): Router {
    return this._router;
  }
}
export default TodoRoutes;
