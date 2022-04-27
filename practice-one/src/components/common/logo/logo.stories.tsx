import { Logo, LogoProp } from '@components/common/logo/index';
import { Story } from '@storybook/react';
import ImageLogo from '@assets/images/logo-product.svg';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template: Story<LogoProp> = (args): JSX.Element => <Logo {...args} />;

export const HeaderLogo = Template.bind({});
HeaderLogo.args = {
  logoUrl: ImageLogo,
  className: 'header-logo__text',
  imgClass: 'header-logo',
};

export const FooterLogo = Template.bind({});
FooterLogo.args = {
  logoUrl: ImageLogo,
  className: 'footer-logo__text',
  imgClass: 'footer-logo',
};
