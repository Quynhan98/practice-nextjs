import { Todo } from '../../../interfaces/Todo';
import TodoItem from '../todo/Todo';

interface ListProp {
  listTodo: Todo[];
  removeTodo: (id: number) => void;
}

const TodoList = ({ listTodo, removeTodo }: ListProp): JSX.Element => {
  const renderListTodo = (list: Todo[]): JSX.Element | JSX.Element[] => {
    if (list.length > 0) {
      return list.map((todo) => (
        <TodoItem id={todo.id} onDelete={removeTodo} key={todo.id}>
          {todo.text}
        </TodoItem>
      ));
    }

    return <p className="new-todo">Nothing Todo</p>;
  };

  return (
    <section className="main">
      <input className="toggle-all" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">{renderListTodo(listTodo)}</ul>
    </section>
  );
};

export default TodoList;
