import { MutableRefObject, useEffect, useRef, useState } from 'react';

//
const LogButtonClicks = (): JSX.Element => {
  const countRef = useRef(0);

  const handleClick = (): void => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('I rendered!');

  return <button onClick={handleClick}>Click me!</button>;
};

//
const StopWatch = (): JSX.Element => {
  const timerIdRef: MutableRefObject<number> = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = (): void => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((item) => item + 1), 1000);
  };

  const stopHandler = (): void => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  return (
    <div>
      <span>------------------------</span>
      <p>Stopwatch</p>
      <p>Timer: {count}s</p>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
};

//
const InputFocus = (): JSX.Element => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    // Element
    console.log(inputRef.current);

    inputRef.current.focus();
  }, []);

  // Undefined
  console.log(inputRef.current);

  return (
    <div>
      <span>-------------------</span>
      <br />
      <input ref={inputRef} type="text" />
    </div>
  );
};

export const ExampleUseRef = (): JSX.Element => {
  return (
    <div>
      <h2>useRef</h2>
      <LogButtonClicks />
      <StopWatch />
      <InputFocus />
    </div>
  );
};
