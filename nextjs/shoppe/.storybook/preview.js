import { customTheme } from '@themes/index'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chakra: {
    theme: customTheme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
