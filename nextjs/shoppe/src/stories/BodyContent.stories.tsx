import { ComponentMeta, ComponentStory } from '@storybook/react'
import BodyContent from '@components/BodyContent'

export default {
  title: 'Component/BodyContent',
  component: BodyContent,
} as ComponentMeta<typeof BodyContent>

const Template: ComponentStory<typeof BodyContent> = (args) => (
  <BodyContent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'List Data',
}
