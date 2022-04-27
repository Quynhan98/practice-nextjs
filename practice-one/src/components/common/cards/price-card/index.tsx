import './price-card.css';
import { ReactNode } from 'react';
import { Heading } from '@components/common/title';

export interface PriceProp {
  title: string;
  price: number;
  operators: string;
  cardType?: 'card-standard' | 'card-normal';
  children?: ReactNode;
}

export const PriceCard = (props: PriceProp): JSX.Element => {
  return (
    <div className={`card__box card col-lg-12 col-xl-4 price-card mt-5 ${props.cardType}`}>
      <div className={`card-body text-center`}>
        <Heading tag="h3" extraClass="card-title">
          {props.title}
        </Heading>
        <p className="card-text">Brief price description</p>
        <div className="d-flex justify-content-center align-items-center">
          <p className="money">{props.price}</p>
          <div className="d-flex align-items-start flex-column">
            <span className="money-icon">$</span>
            <span className="money-per-month">Per / month</span>
          </div>
        </div>
        <p className="card-text">{props.operators} + Operators</p>
        <p className="card-text">Notifications</p>
        <p className="card-text">Landing Pages</p>
        {props.children}
      </div>
    </div>
  );
};
