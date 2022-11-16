import { ComponentMeta, ComponentStory } from '@storybook/react'

// components
import Icon from '@components/Icon'

// Public
import { inIcon, facebook, instagram, twitter } from '../../public'

export default {
  title: 'Component/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon w="20px" h="20px" {...args} />
)

export const LinkIn = Template.bind({})
LinkIn.args = {
  srcIcon: inIcon.src,
  alt: 'LinkIn',
}

export const Facebook = Template.bind({})
Facebook.args = {
  srcIcon: facebook.src,
  alt: 'Facebook',
}

export const Instagram = Template.bind({})
Instagram.args = {
  srcIcon: instagram.src,
  alt: 'Instagram',
}

export const Twitter = Template.bind({})
Twitter.args = {
  srcIcon: twitter.src,
  alt: 'Twitter',
}
