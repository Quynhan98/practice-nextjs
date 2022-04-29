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
  color: 'primary',
  children: 'Button',
  extraClass: 'btn btn-outline-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button',
  extraClass: 'btn btn-secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  color: 'outline-green',
  children: 'Button',
  extraClass: 'btn-standard btn-content',
};
