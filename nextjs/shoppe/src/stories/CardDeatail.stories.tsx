import { ComponentMeta, ComponentStory } from '@storybook/react'

// components
import CardDetail from '@components/CardDetail'

// Mocks
import { PRODUCT_DETAIL } from '@mocks/mockData'

// Types
import { IProductDetail } from '@self-types/index'

export default {
  title: 'Component/CardDetail',
  component: CardDetail,
} as ComponentMeta<typeof CardDetail>

const Template: ComponentStory<typeof CardDetail> = (args) => (
  <CardDetail {...args} />
)

const handleAddProduct = (data: IProductDetail) => {
  // Handle add product into cart
  alert(
    `You have added to product ${data.name} whoses quantity is ${data.quantity}`,
  )
}

export const Default = Template.bind({})
Default.args = {
  ...PRODUCT_DETAIL,
  handleAddCart: handleAddProduct,
}
