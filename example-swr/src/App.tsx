import './styles/reset.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { ListMovie } from './pages/movies-page';
import SingleMoviePage from './pages/single-page';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ListMovie />}>
          <Route path=":movieType" element={<ListMovie />}></Route>
        </Route>
        <Route path="movie/:id" element={<SingleMoviePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
