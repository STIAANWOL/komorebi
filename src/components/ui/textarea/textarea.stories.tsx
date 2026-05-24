import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'

const meta = {
  title: 'Primitives/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    rows: { control: { type: 'number', min: 2, max: 20 } },
  },
  args: {
    placeholder: 'Write something…',
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  name: 'With Value',
  args: { defaultValue: 'This is some pre-filled content in the textarea component.' },
}

export const ErrorState: Story = {
  name: 'Error State',
  args: { error: true, defaultValue: 'Invalid content here' },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'This field is disabled.' },
}

export const Tall: Story = {
  args: { rows: 8, placeholder: 'Lots of space to write…' },
}

export const Playground: Story = {
  name: 'Playground',
  args: { placeholder: 'Playground textarea', disabled: false, error: false },
}
