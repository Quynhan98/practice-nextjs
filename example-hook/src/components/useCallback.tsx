import { useCallback, useState } from 'react';

const funcCount = new Set();

export const ExampleUseCallback = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback((): void => {
    setCount(count + 1);
  }, [count]);

  const decrementCounter = useCallback((): void => {
    setCount(count - 1);
  }, [count]);

  const incrementNumber = useCallback((): void => {
    setNumber(number + 1);
  }, [number]);

  funcCount.add(incrementCounter);
  funcCount.add(decrementCounter);
  funcCount.add(incrementNumber);
  // Update state 'count' -> incrementCounter, decrementCounter will re-instantiated(set size will increase by 2)
  // Update state 'number' -> incrementNumber will re-instantiated(set size will increase by 1)
  alert(funcCount.size);

  return (
    <div>
      <h3>useCallback</h3>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease counter</button>
      <button onClick={incrementNumber}>Increase number</button>
    </div>
  );
};
