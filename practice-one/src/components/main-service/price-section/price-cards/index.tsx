import { Button } from '@components/common/button';
import { PriceCard } from '@components/main-service/price-section/price-card';
import { Price } from '@constant/data/prices';
import './price-cards.css';
export interface PriceProp {
  prices: Price[];
}

export const PriceCards = (props: PriceProp): JSX.Element => {
  const { prices } = props;

  return (
    <div className="price-cards d-flex justify-content-between">
      {prices.map((item) => (
        <PriceCard key={item.title} {...item}>
          <Button
            color={item.cardType === 'card-standard' ? 'outline-green' : 'secondary'}
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
