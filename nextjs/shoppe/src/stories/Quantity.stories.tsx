import { ComponentMeta, ComponentStory } from '@storybook/react'
import Quantity from '@components/Quantity'
import { useState } from 'react'

export default {
  title: 'Component/Quantity',
  component: Quantity,
} as ComponentMeta<typeof Quantity>

export const QuantityDefault: ComponentStory<typeof Quantity> = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const incrementQuantity = () => setQuantity(quantity + 1)
  const decrementQuantity = () => {
    const value = quantity > 1 ? quantity - 1 : 1
    setQuantity(value)
  }

  return (
    <Quantity
      quantity={quantity}
      onIncreaseCartQuantity={incrementQuantity}
      onDecrementCartQuantity={decrementQuantity}
      isDisable={false}
    />
  )
}
