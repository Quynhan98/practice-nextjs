type todoProp = {
  children: string;
  id: number;
  onDelete: (id: number) => void;
};

const TodoItem = ({ onDelete, id, children }: todoProp): JSX.Element => {
  const handleDelete = (): void => {
    onDelete(id);
  };

  return (
    <li key={children} className="todo-text">
      <div>{children}</div>
      <button className="button-delete" onClick={handleDelete}>
        &#10008;
      </button>
    </li>
  );
};
export default TodoItem;
