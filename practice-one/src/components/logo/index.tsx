import { Heading } from '@components/title';
import './logo.css';

export interface LogoProp {
  logoUrl: string;
  className: string;
  imgClass: string;
}

export const Logo = ({ logoUrl, className, imgClass }: LogoProp): JSX.Element => {
  return (
    <a className="product__logo" href="#">
      <Heading tag="h1" extraClass={`product__logo d-flex align-items-center ${className}`}>
        <img src={logoUrl} alt="Logo image" className={imgClass} />
        Product
      </Heading>
    </a>
  );
};
