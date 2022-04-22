import { Header } from '@components/header';
import { ManagementSection } from '@components/management-section';
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
      <ManagementSection />
    </div>
  );
}

export default App;
