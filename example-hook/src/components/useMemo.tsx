import { useEffect, useMemo, useState } from 'react';

export const ExampleUseMemo = (): JSX.Element => {
  const [number, setNumber] = useState(0);

  const addHandler = (): void => {
    setNumber(number + 1);
  };

  const memoized = useMemo((): JSX.Element => {
    return <Child />;
  }, [number]);

  return (
    <div>
      <h3>useMemo</h3>
      <h4>Number: {number}</h4>
      <button onClick={addHandler}>Increment</button>
      <h4>Un-memoized render</h4>
      <Child />
      <h4>Memoized render</h4>
      {memoized}
    </div>
  );
};

let renders = 0;

const Child = (): JSX.Element => {
  useEffect(() => {
    renders++;
  });

  return <div>rendered: {renders}</div>;
};
