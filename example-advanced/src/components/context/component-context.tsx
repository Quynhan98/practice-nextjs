import { createContext } from 'react';

interface MarksContext {
  name: string;
  marks: number;
}

const contextMarks = createContext<MarksContext | null>(null);
const MarksContextProvider = contextMarks.Provider;
const MarksContextConsumer = contextMarks.Consumer;

const sample: MarksContext = {
  name: 'Nhan',
  marks: 100,
};

export const ComponentParent = (): JSX.Element => {
  return (
    <>
      <MarksContextProvider value={sample}>
        <ComponentChildren />
      </MarksContextProvider>
    </>
  );
};

const ComponentChildren = (): JSX.Element => {
  return (
    <>
      <div>
        <h2>Student Info</h2>
        <ComponentGrandChildren />
      </div>
    </>
  );
};

const ComponentGrandChildren = (): JSX.Element => {
  return (
    <>
      <MarksContextConsumer>
        {(context) =>
          context && (
            <div>
              <p>Name: {context.name}</p>
              <p>Marks: {context.marks}</p>
            </div>
          )
        }
      </MarksContextConsumer>
    </>
  );
};
