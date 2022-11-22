import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Header from '@layouts/Header'
import { CARTS_MOCK } from '@mocks/mockData'

export default {
  title: 'Layouts/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />
}

export const Default = Template.bind({})
Default.args = {
  carts: CARTS_MOCK,
}
