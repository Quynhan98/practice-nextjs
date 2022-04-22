import { Button } from '@components/buttons';
import { PriceCard } from '@components/cards/price-card';
import { mainData } from '@data/main';
import { Heading } from '@components/title';

export const PriceSection = (): JSX.Element => {
  return (
    <section className="container-price mt-5">
      <Heading tag="h2">Price Table</Heading>
      <p className="main-content__description text-center">We offer competitive price</p>
      <div className="price-cards row d-flex justify-content-between">
        {mainData.prices.map((item) =>
          item.title === 'Standard' ? (
            <PriceCard key={item.title} {...item}>
              <Button
                color="outline-green"
                children="Order Now"
                type="button"
                extraClass="btn-standard btn-order btn-content"
              />
            </PriceCard>
          ) : (
            <PriceCard key={item.title} {...item}>
              <Button
                color="secondary"
                children="Order Now"
                type="button"
                extraClass="btn-order btn-content"
              />
            </PriceCard>
          )
        )}
      </div>
    </section>
  );
};
