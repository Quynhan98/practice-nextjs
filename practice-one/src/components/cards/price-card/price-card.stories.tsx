import { Button } from '@components/buttons';
import { PriceCard, PriceProp } from '@components/cards/price-card/index';

export default {
  title: 'Components/Cards',
  component: PriceCard,
};

const prices: PriceProp[] = [
  { title: 'Free', price: 0, operators: 'Only 2' },
  { title: 'Standard', price: 5, operators: '5', extraClass: 'card-standard' },
  { title: 'Premium', price: 10, operators: '10' },
];

const Template = (): JSX.Element => {
  return (
    <div className="price-cards row d-flex justify-content-between">
      {prices.map((item) =>
        item.title === 'Standard' ? (
          <PriceCard {...item}>
            <Button
              color="outline-green"
              children="Order Now"
              type="button"
              extraClass="btn-standard btn-order btn-content"
            />
          </PriceCard>
        ) : (
          <PriceCard {...item}>
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
  );
};

export const PriceCards = Template.bind({});
