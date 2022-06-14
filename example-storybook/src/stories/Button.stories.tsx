import { Button, Props } from '../components/button';
import { Story } from '@storybook/react';

export default {
    title: "component/Button",
    component: Button,
    argsType: { handleClick: { action: "handleClick" } }
}

const Template: Story<Props> = (args): JSX.Element => <Button {...args} />

export const Red: Story<Props> = Template.bind({});
Red.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md"
}

export const Green: Story<Props> = Template.bind({});
Green.args = {
    backgroundColor: "green",
    label: "Press me",
    size: "md"
}

export const Small: Story<Props> = Template.bind({});
Small.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "sm"
}

export const Large: Story<Props> = Template.bind({})
Large.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "lg",
}
