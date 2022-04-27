import { Heading, HeadingProp } from '@components/common/title/index';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Title',
  component: Heading,
};

const Template: Story<HeadingProp> = (args): JSX.Element => <Heading {...args} />;

export const Title = Template.bind({});
Title.args = {
  tag: 'h2',
  children: 'Content Title',
};
