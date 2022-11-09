import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import NavBar from '@components/NavBar'

// Constants
import { NAV_LIST } from '@constants/index'

export default {
  title: 'Component/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const Default = Template.bind({})
Default.args = {
  navList: NAV_LIST,
}
