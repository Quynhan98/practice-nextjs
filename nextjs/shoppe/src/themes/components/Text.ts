import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
  sizes: {
    heading: {
      fontSize: 'large',
      medium: 'bold',
    },
    boldText: {
      fontSize: 'base',
      fontWeight: 'medium',
    },
    default: {
      fontSize: { base: 'extraSmall', md: 'base' },
      fontWeight: 'base',
    },
  },

  variants: {
    default: {
      color: 'secondary',
    },
    primary: {
      color: 'dark',
    },
    secondary: {
      color: 'beaver',
    },
    warning: {
      color: 'warning',
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
}
