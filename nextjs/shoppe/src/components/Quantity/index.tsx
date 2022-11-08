import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, IconButton, Text } from '@chakra-ui/react'
import { memo } from 'react'

interface QuantityProps {
  quality: number
  onIncreaseCartQuantity: () => void
  onDecrementCartQuantity: () => void
}

const Quantity = ({
  quality,
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
        color="secondary"
        fontSize="x-small"
        onClick={onIncreaseCartQuantity}
        type="submit"
        aria-label="Search database"
        icon={<AddIcon />}
      />
      <Text color="secondary" fontSize="16px">
        {quality}
      </Text>
      <IconButton
        color="secondary"
        fontSize="x-small"
        onClick={onDecrementCartQuantity}
        type="submit"
        aria-label="Search database"
        icon={<MinusIcon />}
      />
    </Box>
  )
}

export default memo(Quantity)
