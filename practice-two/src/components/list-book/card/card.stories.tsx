import { Story } from '@storybook/react';
import frankensteinImg from '@assets/images/frankenstein-img.jpg';
import { Card, CardProp } from '@components/list-book/card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template: Story<CardProp> = (args) => <Card {...args} />;

export const CardBook = Template.bind({});
CardBook.args = {
  title: 'Frankenstein',
  author: 'Mary Shelley',
  price: 59,
  desc: 'Frankenstein tells the story of Victor Frankenstein, a young scientist',
  image: frankensteinImg,
};
