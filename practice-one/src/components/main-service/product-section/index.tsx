import { Heading } from '@components/common/title';
import { Button } from '@components/common/button';
import { ProductCards } from '@components/main-service/product-section/product-cards';
import './product-section.css';
import { products } from '@constant/data/products';

export const ProductSection = (): JSX.Element => {
  return (
    <section className="container-product">
      <Heading tag="h2" extraClass="product-title">
        Product was Built Specifically for You
      </Heading>
      <ProductCards products={products} />
      <div className="product-btn main-content__button d-flex justify-content-center mt-5">
        <Button color="secondary" type="button" extraClass="btn-content text-uppercase">
          SIGN UP NOW
        </Button>
      </div>
    </section>
  );
};
