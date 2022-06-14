import { useLayoutEffect, useState } from 'react';

export const ExampleUseLayoutEffect = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.random());
    }
  }, [value]);

  console.log(`render: ${value}`);

  return (
    <>
      <h3>useLayoutEffect</h3>
      <div onClick={() => setValue(0)}>value: {value}</div>
    </>
  );
};
