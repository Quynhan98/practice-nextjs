import { ProductCard } from '@components/common/cards/product-card/index';
import { products } from '@data/products';

export default {
  title: 'Components/Cards',
  component: ProductCard,
};

const Template = (): JSX.Element => {
  return (
    <div className="card-group row mt-5">
      {products.map((item) => (
        <ProductCard {...item} />
      ))}
    </div>
  );
};

export const ProductCards = Template.bind({});
