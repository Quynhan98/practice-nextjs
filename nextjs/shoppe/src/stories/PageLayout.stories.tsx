import { ComponentMeta, ComponentStory } from '@storybook/react'

// Layouts
import PageLayout from '@layouts/PageLayout'

export default {
  title: 'Layouts/PageLayout',
  component: PageLayout,
} as ComponentMeta<typeof PageLayout>

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args} />
)

export const Default = Template.bind({})
