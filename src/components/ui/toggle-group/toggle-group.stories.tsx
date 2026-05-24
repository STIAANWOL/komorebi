import type { Meta, StoryObj } from '@storybook/react'
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from 'lucide-react'
import { ToggleGroup } from './toggle-group'

const meta = {
  title: 'Primitives/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven toggle group. Pass `options` (each may carry an `icon`); set `type` to "single" or "multiple".',
      },
    },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

const align = [
  { value: 'left', icon: <AlignLeft className="h-4 w-4" />, ariaLabel: 'Align left' },
  { value: 'center', icon: <AlignCenter className="h-4 w-4" />, ariaLabel: 'Align center' },
  { value: 'right', icon: <AlignRight className="h-4 w-4" />, ariaLabel: 'Align right' },
]

export const Single: Story = {
  name: 'Single Select',
  args: { type: 'single', defaultValue: 'center', options: align },
}

export const Multiple: Story = {
  name: 'Multi Select',
  args: {
    type: 'multiple',
    defaultValue: ['bold'],
    options: [
      { value: 'bold', icon: <Bold className="h-4 w-4" />, ariaLabel: 'Bold' },
      { value: 'italic', icon: <Italic className="h-4 w-4" />, ariaLabel: 'Italic' },
      { value: 'underline', icon: <Underline className="h-4 w-4" />, ariaLabel: 'Underline' },
    ],
  },
}

export const Outline: Story = {
  args: { type: 'single', variant: 'outline', options: align },
}

export const TextLabels: Story = {
  name: 'With Text Labels',
  args: {
    type: 'single',
    defaultValue: 'month',
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
      { value: 'year', label: 'Year' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    type: 'single',
    disabled: true,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ],
  },
}
