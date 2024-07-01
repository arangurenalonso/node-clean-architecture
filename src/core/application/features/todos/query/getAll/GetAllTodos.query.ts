import TodoDomain from '@domain/todos/Todo.domain';
import { IRequest } from 'mediatr-ts';

class GetAllTodosQuery implements IRequest<TodoDomain[]> {
  constructor(public readonly todoId: string) {}
}

export default GetAllTodosQuery;
