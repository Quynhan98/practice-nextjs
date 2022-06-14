import { Props, Stack } from '../components/tack';
import {Story} from '@storybook/react';

export default {
    title: "component/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 }
    }
}

const Template: Story<Props> = ({ numberOfChildren, ...args }): JSX.Element => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(item => (
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {item + 1}
            </div>
        ))}
    </Stack>
);

export const Horizontal: Story<Props> = Template.bind({});
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
}

export const Vertical: Story<Props> = Template.bind({})
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false,
}

export const NoSpacing: Story<Props> = Template.bind({})
NoSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false,
}

export const WrapOverflow: Story<Props> = Template.bind({})
WrapOverflow.args = {
    numberOfChildren: 40,
    direction: "row",
    spacing: 2,
    wrap: true,
}
