import { ManagementSection } from '@components/main-service/management-section';
import { PriceSection } from '@components/main-service/price-section';
import { ProductSection } from '@components/main-service/product-section';
import { WorkSection } from '@components/main-service/work-section';

export const MainService = (): JSX.Element => {
  return (
    <main className="container">
      <WorkSection />
      <ProductSection />
      <ManagementSection />
      <PriceSection />
    </main>
  );
};
