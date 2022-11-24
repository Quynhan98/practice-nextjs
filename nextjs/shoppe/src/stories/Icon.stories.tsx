import { ComponentMeta, ComponentStory } from '@storybook/react'

// components
import Icon from '@components/Icon'

export default {
  title: 'Component/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon w="20px" h="20px" {...args} />
)

export const LinkIn = Template.bind({})
LinkIn.args = {
  srcIcon: './images/inIcon.svg',
  alt: 'LinkIn',
}

export const Facebook = Template.bind({})
Facebook.args = {
  srcIcon: './images/facebook.svg',
  alt: 'Facebook',
}

export const Instagram = Template.bind({})
Instagram.args = {
  srcIcon: './images/instagram.svg',
  alt: 'Instagram',
}

export const Twitter = Template.bind({})
Twitter.args = {
  srcIcon: './images/twitter.svg',
  alt: 'Twitter',
}
