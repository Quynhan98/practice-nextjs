import { Story } from '@storybook/react';
import { Uploader, UploaderProp } from '@components/common/uploader';

export default {
  title: 'Components/Uploader',
  component: Uploader,
};

const Template: Story<UploaderProp> = (args) => <Uploader {...args} />;

export const TextboxInput = Template.bind({});

TextboxInput.args = {
  label: 'Title',
  name: 'image',
};
