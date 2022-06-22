import { useEffect, useState } from 'react';

export const useCustomHook = (initializer: number, componentName: string) => {
  const [counter, setCounter] = useState<number>(initializer);

  const resetCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('The button of the ' + componentName + ' is clicked ' + counter + ' times.');
  }, [counter, componentName]);

  return resetCounter;
};
