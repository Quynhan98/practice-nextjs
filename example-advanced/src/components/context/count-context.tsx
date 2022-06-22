import { createContext, Dispatch, useContext, useReducer } from 'react';

type Value = {
  state: { count: number };
  dispatch: Dispatch<{ type: string }>;
};

const CountContext = createContext<Value | null>(null);
const CountContextProvider = CountContext.Provider;

const countReducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }

    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const CountProvider = (): JSX.Element => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <CountContextProvider value={value}>
      <CountDisplay />
      <Counter />
    </CountContextProvider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export const CountDisplay = () => {
  const countValue = useCount();

  return <div>{`The current count is ${countValue?.state.count}`}</div>;
};

export const Counter = () => {
  const count = useCount();

  return (
    <div>
      <button
        onClick={() => {
          if (count?.dispatch !== undefined) {
            count.dispatch({ type: 'increment' });
          }
        }}
      >
        Increment count
      </button>
      <button
        onClick={() => {
          if (count?.dispatch !== undefined) {
            count.dispatch({ type: 'decrement' });
          }
        }}
      >
        Decrement count
      </button>
    </div>
  );
};
