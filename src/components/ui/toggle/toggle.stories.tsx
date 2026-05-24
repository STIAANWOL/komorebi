import type { Meta, StoryObj } from '@storybook/react'
import { Bold, Italic, Underline } from 'lucide-react'
import { Toggle } from './toggle'

const meta = {
  title: 'Primitives/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline'] },
    size: { control: 'select', options: ['sm', 'default', 'lg', 'icon'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'Toggle', disabled: false },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Outline: Story = {
  args: { variant: 'outline' },
}

export const Pressed: Story = {
  args: { defaultPressed: true, children: 'Active' },
}

export const WithIcon: Story = {
  name: 'With Icon',
  args: {
    children: <Bold className="h-4 w-4" />,
    'aria-label': 'Bold',
    size: 'icon',
  },
}

export const TextEditorTools: Story = {
  name: 'Text Editor Toolbar',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-1 border rounded-md p-1">
      <Toggle size="icon" aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
      <Toggle size="icon" aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
      <Toggle size="icon" aria-label="Underline" variant="outline"><Underline className="h-4 w-4" /></Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}
