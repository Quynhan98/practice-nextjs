import { PriceCards } from '@components/price-cards';
import { Heading } from '@components/title';
import { prices } from '@data/prices';
import './price-section.css';

export const PriceSection = (): JSX.Element => {
  return (
    <section className="container-price mt-5">
      <Heading tag="h2" extraClass="price-title">
        Price Table
      </Heading>
      <p className="main-content__description text-center">We offer competitive price</p>
      <PriceCards prices={prices} />
    </section>
  );
};
