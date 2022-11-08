import { ComponentMeta, ComponentStory } from '@storybook/react'
import Search from '@components/Search'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Component/Search',
  component: Search,
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => (
  <Box width="260px">
    <Search {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search...',
}
