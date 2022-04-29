import LogoProduct from '@assets/images/logo-product.svg';
import { Logo } from '@components/common/logo';
import { SocialIcons } from '@components/common/social-icon';
import { SocialData } from '@constant/data/footer';
import './footer.css';

export const Footer = (): JSX.Element => {
  return (
    <footer className="container-footer container">
      <div className="footer-logo col-md-12">
        <Logo logoUrl={LogoProduct} imgClass="footer-logo" className="footer-logo__text" />
        <SocialIcons social={SocialData} />
      </div>
      <p className="footer-info col-md-12">Made With Love By Product All Right Reserved</p>
    </footer>
  );
};
