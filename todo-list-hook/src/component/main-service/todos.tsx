import { useEffect, useState } from 'react';
import TodoList from './todo-list/TodoList';
import { deleteData, getData, postData } from '../../services/MockApi';
import InputTodo from '../input-todo/Input-todo';
import { Todo } from '../../interfaces/Todo';

const Todos = (): JSX.Element => {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const dataTodo = async (): Promise<Todo[] | void> => {
      const data = await getData();
      setTodo(data);
    };

    dataTodo();
  }, []);

  const addTodo = async (text: string): Promise<void> => {
    const todoOj: Todo = { id: Date.now(), text: text };

    try {
      await postData(todoOj);
      setTodo([...todo, todoOj]);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const handleRemove = async (id: number): Promise<void> => {
    const todoArr: Todo[] = todo.filter((item) => item.id !== id);

    try {
      deleteData(id);
      setTodo(todoArr);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  return (
    <>
      <header className="header">
        <h1>Todos</h1>
        <InputTodo addTodo={addTodo} />
      </header>
      <TodoList removeTodo={handleRemove} listTodo={todo} />
    </>
  );
};

export default Todos;
