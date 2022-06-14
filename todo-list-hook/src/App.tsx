import './styles/reset.css';
import './styles/main.css';
import Todos from './component/main-service/todos';

const App = (): JSX.Element => {
  return (
    <div className="todoapp">
      <Todos />
    </div>
  );
};
export default App;
