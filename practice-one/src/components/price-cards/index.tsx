import { Button } from '@components/buttons';
import { PriceCard } from '@components/cards/price-card';
import { Price } from '@data/prices';
import './price-cards.css';
export interface PriceProp {
  prices: Price[];
}

export const PriceCards = (props: PriceProp): JSX.Element => {
  const { prices } = props;

  return (
    <div className="price-cards row d-flex justify-content-between">
      {prices.map((item) => (
        <PriceCard key={item.title} {...item}>
          <Button
            color={item.title === 'Standard' ? 'outline-green' : 'secondary'}
            type="button"
            extraClass="btn-order btn-content"
          >
            Order Now
          </Button>
        </PriceCard>
      ))}
    </div>
  );
};
