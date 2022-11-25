import { memo } from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, IconButton, Text } from '@chakra-ui/react'

interface QuantityProps {
  isDisable: boolean
  quantity: number
  onIncreaseCartQuantity: () => void
  onDecrementCartQuantity: () => void
}

const Quantity = ({
  isDisable,
  quantity,
  onIncreaseCartQuantity,
  onDecrementCartQuantity,
}: QuantityProps) => {
  return (
    <Box
      background="gray"
      width="135px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="4px"
    >
      <IconButton
        isDisabled={isDisable}
        data-testid="decrement-button"
        color="secondary"
        fontSize="x-small"
        onClick={onDecrementCartQuantity}
        type="submit"
        aria-label="Search database"
        icon={<MinusIcon />}
      />
      <Text color="secondary" fontSize="16px" data-testid="quantity">
        {quantity}
      </Text>
      <IconButton
        isDisabled={isDisable}
        data-testid="increase-button"
        color="secondary"
        fontSize="x-small"
        onClick={onIncreaseCartQuantity}
        type="submit"
        aria-label="Search database"
        icon={<AddIcon />}
      />
    </Box>
  )
}

const quantityPropsAreEqual = (
  prevQuantity: QuantityProps,
  nextQuantity: QuantityProps,
) =>
  prevQuantity.quantity === nextQuantity.quantity &&
  prevQuantity.isDisable === nextQuantity.isDisable

export default memo(Quantity, quantityPropsAreEqual)
