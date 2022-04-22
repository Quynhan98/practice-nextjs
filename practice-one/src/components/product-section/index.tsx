import { Heading } from '@components/title';
import { Button } from '@components/buttons';
import { ProductCards } from '@components/product-cards';

export const ProductSection = (): JSX.Element => {
  return (
    <section className="container-product">
      <Heading tag="h2" extraClass="product-title">
        Product was Built Specifically for You
      </Heading>
      <ProductCards />
      <div className="product-btn main-content__button d-flex justify-content-center mt-5">
        <Button color="secondary" type="button" extraClass="btn-content text-uppercase">
          SIGN UP NOW
        </Button>
      </div>
    </section>
  );
};
