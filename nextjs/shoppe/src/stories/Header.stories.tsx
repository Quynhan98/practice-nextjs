import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Header from '@layouts/Header'

export default {
  title: 'Layouts/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})
