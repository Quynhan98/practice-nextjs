import { MenuProp, NavMenu } from '@components/menu-list/index';
import { menuList } from '@data/header';
import { Story } from '@storybook/react';

export default {
  title: 'Components',
  component: NavMenu,
};

const Template: Story<MenuProp> = (args): JSX.Element => <NavMenu {...args} />;

export const MenuList = Template.bind({});
MenuList.args = {
  menuItem: menuList,
};
