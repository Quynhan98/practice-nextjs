import { ProductCard } from '@components/cards/product-card';
import { mainData } from '@data/main';

export const ProductCards = (): JSX.Element => {
  return (
    <div className="card-group row">
      {mainData.product.map((item) => (
        <ProductCard key={item.title} {...item} />
      ))}
    </div>
  );
};
