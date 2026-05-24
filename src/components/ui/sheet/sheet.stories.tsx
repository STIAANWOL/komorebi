import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import { Sheet } from './sheet'

const meta = {
  title: 'Overlay/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven side drawer. Pass `trigger`, `title`, `side`, and `footer`; the body is `children`.',
      },
    },
  },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Right: Story = {
  args: {
    trigger: <Button variant="outline">Open Sheet (Right)</Button>,
    title: 'Edit settings',
    description: 'Adjust your workspace preferences.',
    footer: <Button>Save changes</Button>,
    children: (
      <div className="flex flex-col gap-4 py-6">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="workspace">Workspace name</Label>
          <Input id="workspace" defaultValue="My Project" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="region">Region</Label>
          <Input id="region" defaultValue="af-south-1 (Cape Town)" />
        </div>
      </div>
    ),
  },
}

export const Left: Story = {
  args: {
    side: 'left',
    trigger: <Button variant="outline">Open Sheet (Left)</Button>,
    title: 'Navigation',
    children: (
      <nav className="flex flex-col gap-1 py-6">
        {['Dashboard', 'Projects', 'Team', 'Billing', 'Settings'].map((item) => (
          <button
            key={item}
            className="rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
          >
            {item}
          </button>
        ))}
      </nav>
    ),
  },
}

export const Bottom: Story = {
  args: {
    side: 'bottom',
    trigger: <Button variant="outline">Open Sheet (Bottom)</Button>,
    title: 'Share with team',
    description: 'Invite colleagues to collaborate on this document.',
    footer: <Button>Send invite</Button>,
    children: (
      <div className="py-4">
        <Input placeholder="Enter email address…" type="email" />
      </div>
    ),
  },
}
