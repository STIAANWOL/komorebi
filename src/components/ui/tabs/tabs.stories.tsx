import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import { Tabs } from './tabs'

const meta = {
  title: 'Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven tabset. Pass a `tabs` array of `{ value, label, content }`; the list and panels are rendered for you.',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-96',
    listClassName: 'w-full',
    defaultValue: 'account',
    tabs: [
      {
        value: 'account',
        label: 'Account',
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="tab-name">Name</Label>
              <Input id="tab-name" defaultValue="Stiaan Wolfaardt" />
            </div>
            <Button className="self-start">Save changes</Button>
          </div>
        ),
      },
      {
        value: 'password',
        label: 'Password',
        content: (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="new-pw">New password</Label>
              <Input id="new-pw" type="password" />
            </div>
            <Button className="self-start">Update password</Button>
          </div>
        ),
      },
      {
        value: 'billing',
        label: 'Billing',
        content: (
          <p className="text-sm text-muted-foreground">Pro plan — R850/month · Renews 2026-06-01</p>
        ),
      },
    ],
  },
}

export const Simple: Story = {
  args: {
    className: 'w-80',
    defaultValue: 'all',
    tabs: [
      {
        value: 'all',
        label: 'All',
        content: <p className="text-sm text-muted-foreground">All 24 items</p>,
      },
      {
        value: 'active',
        label: 'Active',
        content: <p className="text-sm text-muted-foreground">18 active items</p>,
      },
      {
        value: 'archived',
        label: 'Archived',
        content: <p className="text-sm text-muted-foreground">6 archived items</p>,
      },
    ],
  },
}
