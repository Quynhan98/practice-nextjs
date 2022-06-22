import { MutableRefObject, useRef } from 'react';

export const UncontrolledComponent = () => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = (): void => {
    alert(`Welcome ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <input ref={inputRef} type="text" />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
