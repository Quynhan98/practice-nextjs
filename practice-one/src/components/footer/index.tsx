import LogoProduct from '@assets/images/logo-product.svg';
import { Logo } from '@components/logo';
import { SocialIcons } from '@components/social-icon';
import { SocialData } from '@data/footer';
import './footer.css';

export const Footer = (): JSX.Element => {
  return (
    <footer className="container-footer">
      <div className="footer-logo col-md-12">
        <Logo logoUrl={LogoProduct} imgClass="footer-logo" className="footer-logo__text" />
        <SocialIcons social={SocialData} />
      </div>
      <p className="footer-info col-md-12">Made With Love By Product All Right Reserved</p>
    </footer>
  );
};
