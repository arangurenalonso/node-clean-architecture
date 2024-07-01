import { Router } from 'express';
import TodoRoutes from './todos/todo.routes';
import { inject, injectable } from 'inversify';
import TYPES from '@config/identifiers';

@injectable()
class ApiRouter {
  constructor(
    @inject(TYPES.Router) private readonly _router: Router,
    @inject(TYPES.TodoRoutes) private readonly todoRoutes: TodoRoutes
  ) {
    this.init();
    this._router = this._router.bind(this);
  }

  private init(): void {
    this._router.use('/todo', this.todoRoutes.router);
  }
  get router(): Router {
    return this._router;
  }
}

export default ApiRouter;
