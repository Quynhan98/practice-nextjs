import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Footer from '@layouts/Footer'

export default {
  title: 'Layouts/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Template.bind({})
