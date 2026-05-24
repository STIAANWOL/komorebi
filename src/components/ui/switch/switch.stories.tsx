import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Switch } from './switch'
import { Label } from '../label'

const meta = {
  title: 'Primitives/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: { disabled: false },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: { checked: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledChecked: Story = {
  name: 'Disabled + Checked',
  args: { disabled: true, checked: true },
}

export const WithLabel: Story = {
  name: 'With Label',
  render: (args) => {
    const [enabled, setEnabled] = React.useState(false)
    return (
      <div className="flex items-center gap-3">
        <Switch id="notif" checked={enabled} onCheckedChange={setEnabled} {...args} />
        <Label htmlFor="notif">{enabled ? 'Notifications on' : 'Notifications off'}</Label>
      </div>
    )
  },
}

export const SettingsRow: Story = {
  name: 'Settings Row Pattern',
  parameters: { controls: { disable: true } },
  render: () => {
    const [state, setState] = React.useState({ emails: true, push: false, marketing: false })
    return (
      <div className="w-80 flex flex-col gap-4">
        {(Object.entries(state) as [keyof typeof state, boolean][]).map(([key, val]) => (
          <div key={key} className="flex items-center justify-between">
            <Label htmlFor={key} className="capitalize">{key} notifications</Label>
            <Switch id={key} checked={val} onCheckedChange={(v) => setState((s) => ({ ...s, [key]: v }))} />
          </div>
        ))}
      </div>
    )
  },
}
