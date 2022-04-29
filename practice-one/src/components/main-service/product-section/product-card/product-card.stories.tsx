import { ProductCard, ProductProp } from '@components/main-service/product-section/product-card';
import iconClick from '@assets/images/icon-click.svg';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Cards',
  component: ProductCard,
};

const Template: Story<ProductProp> = (args): JSX.Element => <ProductCard {...args} />;

export const ProductCards = Template.bind({});
ProductCards.args = {
  img: iconClick,
  title: 'First click tests',
  desc: 'While most people enjoy casino gambling,',
};
