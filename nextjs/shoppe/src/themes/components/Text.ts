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
      fontSize: 'base',
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
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
}
