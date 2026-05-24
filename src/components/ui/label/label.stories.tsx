import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Input } from '../input'
import { Checkbox } from '../checkbox'

const meta = {
  title: 'Primitives/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Accessible label powered by Radix UI. Use `htmlFor` to associate with form controls.',
      },
    },
  },
  argTypes: {
    required: { control: 'boolean', description: 'Appends a red asterisk.' },
    children: { control: 'text' },
  },
  args: {
    children: 'Email address',
    required: false,
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Required: Story = {
  args: { required: true },
}

export const WithInput: Story = {
  name: 'Paired with Input',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email" required>Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  name: 'Paired with Checkbox',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}
