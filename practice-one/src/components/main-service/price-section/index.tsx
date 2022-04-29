import { PriceCards } from '@components/main-service/price-section/price-cards';
import { Heading } from '@components/common/title';
import { prices } from '@constant/data/prices';
import './price-section.css';

export const PriceSection = (): JSX.Element => {
  return (
    <section className="container-price">
      <Heading tag="h2" extraClass="price-title">
        Price Table
      </Heading>
      <p className="main-content__description text-center">We offer competitive price</p>
      <PriceCards prices={prices} />
    </section>
  );
};
