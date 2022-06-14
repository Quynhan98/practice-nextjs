import { Story } from '@storybook/react';
import { Button, ButtonProp } from '@components/common/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<ButtonProp> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'btn-primary',
  children: 'Button',
  typeButton: 'button',
  size: 'btn-large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'btn-secondary',
  children: 'Button',
  typeButton: 'button',
  size: 'btn-small',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'btn-warning',
  children: 'Button',
  typeButton: 'button',
  size: 'btn-small',
};
