import { Heading } from '@components/title';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './product-card.css';

export interface ProductProp {
  img: string;
  title: string;
  desc: string;
}

export const ProductCard = (props: ProductProp): JSX.Element => {
  return (
    <div className="product-card col-xs-12 col-sm-6 col-lg-3">
      <div className="card">
        <div className="card-body">
          <img src={props.img} className="product-icon" alt="icon click" />
          <Heading tag="h3" extraClass="card-title mt-4">
            {props.title}
          </Heading>
          <p className="card-text mt-3">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
