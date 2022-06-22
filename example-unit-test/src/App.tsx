import { Fetch } from './example/fetch';
import { HiddenMessage } from './example/hidden-message';
import { User } from './example/user';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <HiddenMessage>Example Unit-Testing</HiddenMessage>
      <Fetch />
      <User />
    </div>
  );
};

export default App;
