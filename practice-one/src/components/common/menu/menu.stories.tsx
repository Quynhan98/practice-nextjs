import { MenuProp, NavMenu } from '@components/common/menu/index';
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
