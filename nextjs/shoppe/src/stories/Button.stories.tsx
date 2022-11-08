import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '@components/Button'

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Add To Cart',
  variant: 'primary',
  size: 'default',
}
