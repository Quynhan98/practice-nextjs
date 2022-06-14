import { ExampleUseCallback } from './components/useCallback';
import { ExampleUseContext } from './components/useContext';
import { ExampleUseEffect } from './components/useEffect';
import { ExampleUseLayoutEffect } from './components/useLayoutEffect';
import { ExampleUseMemo } from './components/useMemo';
import { ExampleUseReducer } from './components/useReducer';
import { ExampleUseRef } from './components/useRef';
import { ExampleUseState } from './components/useState';

function App() {
  return (
    <div className="App">
      <ExampleUseLayoutEffect />
      <ExampleUseState />
      <ExampleUseEffect />
      <ExampleUseContext />
      <ExampleUseRef />
      <ExampleUseReducer />
      <ExampleUseCallback />
      <ExampleUseMemo />
    </div>
  );
}

export default App;
