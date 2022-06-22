// import { CodeSplitting } from './components/code-splitting';
import { ComponentParent } from './components/context/component-context';
import { CountProvider } from './components/context/count-context';
import { ExampleCustomHook } from './components/custom-hook';
import { ExampleErrorBoundary } from './components/error-boundary';
import { ForwardingRefExample } from './components/forwarding-ref';
import { ExampleFragment } from './components/fragment';
import { OptimizingPerformance } from './components/optimizing-performance';
import { ExampleProfiler } from './components/profiler';
import { ExampleSWR } from './components/swr';
import { UncontrolledComponent } from './components/uncontroled-component';

const App = (): JSX.Element => {
  return (
    <div className="App">
      {/* <CodeSplitting /> */}
      <ComponentParent />
      <CountProvider />
      <ExampleErrorBoundary />
      <UncontrolledComponent />
      <ExampleProfiler />
      <ForwardingRefExample />
      <OptimizingPerformance />
      <ExampleCustomHook />
      <ExampleFragment />
      <ExampleSWR />
    </div>
  );
};

export default App;
