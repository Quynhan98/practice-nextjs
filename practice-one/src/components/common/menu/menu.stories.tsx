import { MenuProp, NavMenu } from '@components/common/menu/index';
import { Story } from '@storybook/react';

export default {
  title: 'Components',
  component: NavMenu,
};

const Template: Story<MenuProp> = (args): JSX.Element => <NavMenu {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  menuItem: ['Product', 'Customers', 'Pricing', 'Resources'],
};
