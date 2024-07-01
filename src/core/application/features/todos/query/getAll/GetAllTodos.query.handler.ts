import TYPES from '@config/identifiers';
import ITodoRepository from '@domain/repositories/ITodos.repository';
import TodoDomain from '@domain/todos/Todo.domain';
import { injectable, inject } from 'inversify';
import { requestHandler, IRequestHandler } from 'mediatr-ts';
import GetAllTodosQuery from './GetAllTodos.query';

@injectable()
@requestHandler(GetAllTodosQuery)
class GetAllTodosQueryHandler
  implements IRequestHandler<GetAllTodosQuery, TodoDomain[]>
{
  constructor(
    @inject(TYPES.ITodoRepository) private _todoRepository: ITodoRepository
  ) {}
  async handle(query: GetAllTodosQuery): Promise<TodoDomain[]> {
    console.log('GetAllTodosQueryHandler', query);

    return await this._todoRepository.getAll();
  }
}
export default GetAllTodosQueryHandler;
