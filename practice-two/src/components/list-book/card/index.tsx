import { Button } from '@components/common/button';
import { memo } from 'react';
import './card.css';

export type CardProp = {
  title: string;
  author: string;
  price: number;
  desc?: string;
  image?: string;
};

const Card = (props: CardProp): JSX.Element => {
  const { title, author, price, desc, image } = props;

  return (
    <div className="card">
      <div className="card-body">
        <img src={image} alt={`image ${title}`} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <span className="card-author">{author}</span>
        <span className="card-price">Price: {price} USD</span>
        <p className="card-desc">{desc}</p>
        <div className="button-group">
          <Button color="btn-secondary" typeButton="button" size="btn-small">
            Edit
          </Button>
          <Button color="btn-warning" typeButton="button" size="btn-small">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
