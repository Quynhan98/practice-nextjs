import { useCustomHook } from './use-custom-hook';

const FirstComponent = () => {
  const handleClick = useCustomHook(0, 'First Component');

  return (
    <div>
      <h2>This is the First Component</h2>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

const SecondComponent = () => {
  const handleClick = useCustomHook(0, 'Second Component');

  return (
    <div>
      <h2>This is the Second Component</h2>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export const ExampleCustomHook = () => {
  return (
    <div>
      <h2>Custom Hooks</h2>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
};
