import { Header } from '@components/header';
import { Books } from '@components/list-book';
import './styles/main.css';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <Books />
    </div>
  );
};
export default App;
