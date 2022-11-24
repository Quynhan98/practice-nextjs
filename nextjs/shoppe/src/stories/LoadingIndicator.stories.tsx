import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import LoadingIndicator from '@components/LoadingIndicator'

export default {
  title: 'Component/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>

export const LoadingIndicatorComponent: ComponentStory<
  typeof LoadingIndicator
> = (args) => <LoadingIndicator {...args} />
