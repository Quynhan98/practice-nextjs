import { Button } from '@components/common/button';
import { PriceCard, PriceProp } from '@components/main-service/price-section/price-card';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Cards',
  component: PriceCard,
};

const Template: Story<PriceProp> = (args): JSX.Element => (
  <PriceCard {...args}>
    <Button
      color={args.cardType === 'card-standard' ? 'outline-green' : 'secondary'}
      type="button"
      extraClass="btn-order btn-content"
    >
      Order Now
    </Button>
  </PriceCard>
);

export const PriceCards = Template.bind({});
PriceCards.args = {
  title: 'Free',
  price: 0,
  operators: 'Only 2',
  cardType: 'card-normal',
};
