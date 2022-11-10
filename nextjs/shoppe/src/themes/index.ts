import { extendTheme } from '@chakra-ui/react'
import { fontSizes, fontWeights } from '@themes/fonts'
import { colors } from '@themes/color'
import { Button } from '@themes/components/Button'

export const customTheme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  components: {
    Button,
  },
})
