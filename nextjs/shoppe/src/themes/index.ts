import { extendTheme } from '@chakra-ui/react'
import { fontSize } from '@themes/fonts'
import { colors } from '@themes/color'
import { Button } from '@themes/components/Button'

export const customTheme = extendTheme({
  colors,
  fontSize,
  components: {
    Button,
  },
})
