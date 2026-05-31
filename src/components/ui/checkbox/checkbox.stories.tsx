import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Checkbox } from './checkbox'
import { Label } from '../label'

const meta = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean', description: 'Shows a dash instead of a tick.' },
    checked: { control: 'boolean' },
    error: { control: 'boolean' },
    errorText: { control: 'text' },
    label: { control: 'text' },
  },
  args: {
    disabled: false,
    indeterminate: false,
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { checked: true },
}

export const Indeterminate: Story = {
  args: { indeterminate: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledChecked: Story = {
  name: 'Disabled + Checked',
  args: { disabled: true, checked: true },
}

export const WithLabelProp: Story = {
  name: 'With Label Prop',
  args: { label: 'Accept terms and conditions' },
}

export const WithErrorText: Story = {
  name: 'With Error Text',
  args: {
    label: 'Accept terms and conditions',
    error: true,
    errorText: 'You must accept the terms to continue.',
  },
}

export const WithLabel: Story = {
  name: 'With Label',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="accept" />
      <Label htmlFor="accept">Accept terms and conditions</Label>
    </div>
  ),
}

export const CheckboxGroup: Story = {
  name: 'Checkbox Group',
  parameters: { controls: { disable: true } },
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['sakura'])
    const options = ['Sakura', 'Matcha', 'Sora', 'Fuji']
    return (
      <fieldset className="flex flex-col gap-3">
        <legend className="font-serif text-sm font-semibold mb-3">Favourite palettes</legend>
        {options.map((opt) => (
          <div key={opt} className="flex items-center gap-2">
            <Checkbox
              id={opt.toLowerCase()}
              checked={selected.includes(opt.toLowerCase())}
              onCheckedChange={(v) =>
                setSelected((prev) =>
                  v ? [...prev, opt.toLowerCase()] : prev.filter((s) => s !== opt.toLowerCase()),
                )
              }
            />
            <Label htmlFor={opt.toLowerCase()}>{opt}</Label>
          </div>
        ))}
      </fieldset>
    )
  },
}
