import { Header } from '@components/header';
import { ProductSection } from '@components/product-section';
import { WorkSection } from '@components/work-section';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

function App() {
  return (
    <div className="App container">
      <Header />
      <WorkSection />
      <ProductSection />
    </div>
  );
}

export default App;
