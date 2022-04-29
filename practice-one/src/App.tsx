import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { Header } from '@components/header';
import { MainService } from '@components/main-service';
import { Footer } from '@components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainService />
      <Footer />
    </div>
  );
}

export default App;
