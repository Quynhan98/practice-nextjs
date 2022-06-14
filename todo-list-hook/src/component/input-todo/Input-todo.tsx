import { ChangeEvent, KeyboardEvent, useState } from 'react';

type InputProp = {
  addTodo: (todo: string) => void;
};

const InputTodo = ({ addTodo }: InputProp): JSX.Element => {
  const [todo, setTodo] = useState('');

  const handleGetValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handlerAddTodo = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && todo) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <input
      onKeyPress={handlerAddTodo}
      onChange={handleGetValue}
      value={todo}
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
    />
  );
};

export default InputTodo;
