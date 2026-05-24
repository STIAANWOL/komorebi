import type { Meta, StoryObj } from '@storybook/react'
import { Bell } from 'lucide-react'
import { Button } from '../button'
import { Badge } from '../badge'
import { Switch } from '../switch'
import { Label } from '../label'
import { Card } from './card'

const meta = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven card. Pass `title`, `description`, and `footer`; the body is `children`.',
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-80',
    title: 'Card Title',
    description: 'Card description goes here. Keep it concise.',
    children: <p className="text-sm text-muted-foreground">Content area for arbitrary content.</p>,
    footer: (
      <>
        <Button size="sm">Primary action</Button>
        <Button size="sm" variant="ghost">
          Cancel
        </Button>
      </>
    ),
  },
}

export const Notifications: Story = {
  name: 'Notification Settings',
  args: {
    className: 'w-96',
    title: 'Notifications',
    description: 'Choose how you want to be notified.',
    footer: <Button className="w-full">Save preferences</Button>,
    children: (
      <div className="flex flex-col gap-4">
        {[
          { label: 'Push notifications', description: 'Receive alerts on your device.' },
          { label: 'Email digest', description: 'Daily summary of activity.' },
          { label: 'Marketing emails', description: 'Product updates and offers.' },
        ].map(({ label, description }) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <Label className="text-sm">{label}</Label>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
            <Switch />
          </div>
        ))}
      </div>
    ),
  },
}

export const PricingCard: Story = {
  name: 'Pricing Card',
  args: {
    className: 'w-72',
    title: (
      <div className="flex items-center justify-between">
        <span>Pro</span>
        <Badge variant="sakura">Popular</Badge>
      </div>
    ),
    description: 'For growing teams and businesses.',
    footer: <Button className="w-full">Get started</Button>,
    children: (
      <>
        <div className="mb-6 flex items-end gap-1">
          <span className="font-serif text-4xl font-bold">R850</span>
          <span className="mb-1 text-sm text-muted-foreground">/month</span>
        </div>
        <ul className="flex flex-col gap-2 text-sm">
          {[
            'Unlimited projects',
            '25GB storage',
            'Priority support',
            'Advanced analytics',
            'Custom domains',
          ].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="text-matcha">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </>
    ),
  },
}

export const WithIcon: Story = {
  name: 'With Icon Header',
  args: {
    className: 'w-72',
    title: (
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sakura/30">
          <Bell className="h-5 w-5 text-sumi" />
        </div>
        <div>
          <p className="text-base">3 new alerts</p>
          <p className="text-sm font-normal text-muted-foreground">Since your last visit</p>
        </div>
      </div>
    ),
    children: (
      <p className="text-sm text-muted-foreground">
        Review your notifications to stay up to date with team activity.
      </p>
    ),
    footer: (
      <Button size="sm" variant="outline">
        View all
      </Button>
    ),
  },
}
