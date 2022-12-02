import React, { memo } from 'react'
import { Flex, Spinner, SpinnerProps } from '@chakra-ui/react'

const LoadingIndicator = ({ ...props }: SpinnerProps) => {
  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      backgroundColor="lightSilver"
      opacity={0.5}
      position="fixed"
      backdropFilter="blur(3px)"
      inset={0}
      zIndex={1500}
      paddingTop="150px"
    >
      <Spinner {...props} />
    </Flex>
  )
}

export default memo(LoadingIndicator)
