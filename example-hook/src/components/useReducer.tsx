import { useReducer } from 'react';

const initialState = 0;
const reducer = (state: number, action: string) => {
  switch (action) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    case 'reset':
      return 0;
    default:
      throw new Error('Error!');
  }
};

export const ExampleUseReducer = (): JSX.Element => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>useReducer</h3>
      <span>{count}</span>
      <br />
      <button onClick={() => dispatch('add')}>add</button>
      <button onClick={() => dispatch('subtract')}>subtract</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};
