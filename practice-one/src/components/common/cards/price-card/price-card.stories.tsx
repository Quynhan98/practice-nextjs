import { Button } from '@components/common/button';
import { PriceCard } from '@components/common/cards/price-card/index';
import { prices } from '@data/prices';

export default {
  title: 'Components/Cards',
  component: PriceCard,
};

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
