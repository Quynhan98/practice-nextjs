import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';

const MyComponent = lazy(() => import('./my-component'));
const OtherComponent = lazy(() => import('./other-component'));

export const CodeSplitting = (): JSX.Element => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<MyComponent />} />
            <Route path="/other" element={<OtherComponent />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};
