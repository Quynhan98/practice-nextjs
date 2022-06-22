import { memo, useCallback, useMemo, useState } from 'react';

type CounterComponentProp = {
  handleDecrease: () => void;
  modifiedCount: number;
};

const CounterComponent = memo(({ handleDecrease, modifiedCount }: CounterComponentProp) => {
  console.log('Component is rendering');

  return (
    <div>
      <p>{modifiedCount}</p>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
});

export const OptimizingPerformance = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const modifiedCount = useMemo(() => {
    console.log('Run useMemo');
    return otherCount + 1;
  }, [otherCount]);

  const handleDecrease = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <section>
      <h2>Optimizing Performance</h2>
      <p>{count}</p>
      <CounterComponent handleDecrease={handleDecrease} modifiedCount={modifiedCount} />
      <button onClick={() => setOtherCount(otherCount + 1)}>Increase</button>
    </section>
  );
};
