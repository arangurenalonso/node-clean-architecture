import TodoDomain from '@domain/todos/Todo.domain';

interface ITodoRepository {
  getAll(): Promise<TodoDomain[]>;
  save(todo: TodoDomain): Promise<void>;
}
export default ITodoRepository;
