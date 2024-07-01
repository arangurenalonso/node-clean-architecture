import { injectable } from 'inversify';
import TodoDomain from '@domain/todos/Todo.domain';
import ITodoRepository from '@domain/repositories/ITodos.repository';

@injectable()
class TodoRepository implements ITodoRepository {
  private todos: TodoDomain[] = [
    new TodoDomain({
      id: '1',
      title: 'Todo 1',
      description: 'Description 1',
      completed: false,
      start: new Date(),
      end: new Date(),
    }),
    new TodoDomain({
      id: '2',
      title: 'Todo 2',
      description: 'Description 2',
      completed: false,
      start: new Date(),
      end: new Date(),
    }),
  ];

  async getAll(): Promise<TodoDomain[]> {
    return this.todos;
  }

  async save(newTodo: TodoDomain): Promise<void> {
    this.todos.push(newTodo);
  }
}
export default TodoRepository;
