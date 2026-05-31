import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select } from './select'

const meta = {
  title: 'Primitives/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven dropdown select. Pass `options` and a `placeholder`; group options with `{ group, items }`.',
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const colours = [
  { value: 'sakura', label: 'Sakura' },
  { value: 'matcha', label: 'Matcha' },
  { value: 'sora', label: 'Sora' },
  { value: 'fuji', label: 'Fuji' },
  { value: 'aki', label: 'Aki' },
]

export const Default: Story = {
  args: {
    options: colours,
    placeholder: 'Select a colour…',
    className: 'w-56',
  },
}

export const WithGroups: Story = {
  name: 'With Groups',
  args: {
    placeholder: 'Select a timezone…',
    className: 'w-64',
    options: [
      {
        group: 'Africa',
        items: [
          { value: 'africa/johannesburg', label: 'Johannesburg (SAST)' },
          { value: 'africa/cairo', label: 'Cairo (EET)' },
        ],
      },
      {
        group: 'Europe',
        items: [
          { value: 'europe/london', label: 'London (GMT)' },
          { value: 'europe/paris', label: 'Paris (CET)' },
        ],
      },
    ],
  },
}

export const WithDefaultValue: Story = {
  name: 'With Default Value',
  args: { options: colours, defaultValue: 'matcha', className: 'w-56' },
}

export const Disabled: Story = {
  args: { options: colours, placeholder: 'Select a colour…', disabled: true, className: 'w-56' },
}

export const WithErrorText: Story = {
  name: 'With Error Text',
  args: {
    options: colours,
    placeholder: 'Select a colour…',
    className: 'w-56',
    error: true,
    errorText: 'Please pick a colour.',
  },
}

export const WithDisabledItem: Story = {
  name: 'With Disabled Item',
  args: {
    placeholder: 'Select a plan…',
    className: 'w-56',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise (contact us)', disabled: true },
    ],
  },
}

export const Controlled: Story = {
  args: { options: colours },
  render: () => {
    const [value, setValue] = useState('sakura')
    return (
      <div className="flex flex-col gap-3">
        <Select options={colours} value={value} onValueChange={setValue} className="w-56" />
        <p className="text-sm text-muted-foreground">Selected: {value}</p>
      </div>
    )
  },
}
