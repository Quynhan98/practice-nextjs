import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

//
const LifecycleDemo = (): JSX.Element => {
  useEffect(() => {
    // Được gọi sau mỗi lần render( render lần đâu tiên và các lần sau đó)
    console.log('render!');

    // Được gọi trước khi unmounting (componentWillUnmount)
    return () => console.log('unmounting...');
  });

  return <p>Lifecycle demo</p>;
};

const AddEventButton = (): JSX.Element => {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);

  const reRender = (): void => setRandom(Math.random());

  const toggle = (): void => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render: {random}</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo />}
    </>
  );
};

//Get Books data from json-server and render
type Props = {
  paramUrl: string;
};

interface Book {
  id: number;
  title: string;
}

const Books = ({ paramUrl }: Props): JSX.Element => {
  const [books, setBooks] = useState([
    {
      id: 0,
      title: '',
    },
  ]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(`http://localhost:3001/${paramUrl}`);
      const booksData = await response.json();

      setBooks(booksData.map((item: Book) => item));
    };

    fetchData();
  }, [paramUrl, setBooks]);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};

const BookApp = (): JSX.Element => {
  const [inputValue, setValue] = useState('books');
  const [paramUrl, setParamUrl] = useState(inputValue);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setParamUrl(inputValue);
  };

  const getValueForm = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input onChange={getValueForm} value={inputValue} type="text" />
      </form>
      <Books paramUrl={paramUrl} />
    </>
  );
};

// Synthesize components about useEffect
export const ExampleUseEffect = (): JSX.Element => {
  return (
    <div>
      <h2>useEffect</h2>
      <BookApp />
      <AddEventButton />
    </div>
  );
};
