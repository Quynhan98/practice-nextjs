import { extendTheme } from '@chakra-ui/react'
import { fontSizes, fontWeights } from '@themes/fonts'
import { colors } from '@themes/color'
import { Button } from '@themes/components/Button'
import { Text } from '@themes/components/Text'

export const customTheme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  components: {
    Button,
    Text,
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
})
