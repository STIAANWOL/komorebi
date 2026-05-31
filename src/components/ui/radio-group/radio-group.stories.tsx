import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroup } from './radio-group'

const meta = {
  title: 'Primitives/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven radio group. Pass `options`; labels are wired up automatically.',
      },
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const plans = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
]

export const Default: Story = {
  args: { options: plans, defaultValue: 'pro' },
}

export const Horizontal: Story = {
  args: { options: plans, defaultValue: 'free', orientation: 'horizontal' },
}

export const WithErrorText: Story = {
  name: 'With Error Text',
  args: {
    options: plans,
    error: true,
    errorText: 'Please pick a plan.',
  },
}

export const WithDisabledItem: Story = {
  name: 'With Disabled Item',
  args: {
    defaultValue: 'free',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise (contact sales)', disabled: true },
    ],
  },
}

export const Controlled: Story = {
  args: { options: plans },
  render: () => {
    const [value, setValue] = useState('pro')
    return (
      <div className="flex flex-col gap-3">
        <RadioGroup options={plans} value={value} onValueChange={setValue} />
        <p className="text-sm text-muted-foreground">Selected: {value}</p>
      </div>
    )
  },
}
