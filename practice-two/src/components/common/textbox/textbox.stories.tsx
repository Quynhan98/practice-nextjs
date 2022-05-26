import { Story } from '@storybook/react';
import { Textbox, TextboxProp } from '@components/common/textbox';

export default {
  title: 'Components/Textbox',
  component: Textbox,
};

const Template: Story<TextboxProp> = (args) => <Textbox {...args} />;

export const TextboxInput = Template.bind({});
TextboxInput.args = {
  label: 'Title',
  inputType: 'text',
  name: 'title',
  messageErr: 'Message error',
};
