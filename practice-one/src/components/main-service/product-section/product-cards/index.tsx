import { ProductCard } from '@components/main-service/product-section/product-card';
import { Product } from '@constant/data/products';
import './product-cards.css';

export interface ProductProp {
  products: Product[];
}

export const ProductCards = (props: ProductProp): JSX.Element => {
  const { products } = props;

  return (
    <div className="card-group">
      {products.map((item) => (
        <ProductCard key={item.title} {...item} />
      ))}
    </div>
  );
};
