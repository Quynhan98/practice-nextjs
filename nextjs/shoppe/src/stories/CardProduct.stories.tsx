import { ComponentMeta, ComponentStory } from '@storybook/react'

// components
import CardProduct from '@components/CardProduct'

// Mocks
import { PRODUCT_ITEM } from '@mocks/mockData'

export default {
  title: 'Component/CardProduct',
  component: CardProduct,
} as ComponentMeta<typeof CardProduct>

const Template: ComponentStory<typeof CardProduct> = (args) => (
  <CardProduct {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...PRODUCT_ITEM,
}
