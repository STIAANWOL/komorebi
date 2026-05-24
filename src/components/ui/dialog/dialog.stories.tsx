import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import { Dialog } from './dialog'

const meta = {
  title: 'Overlay/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven modal. Pass `trigger`, `title`, `description`, and `footer`; the body is `children`.',
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button>Open Dialog</Button>,
    title: 'Edit profile',
    description: "Make changes to your profile here. Click save when you're done.",
    footer: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button>Save changes</Button>
      </>
    ),
    children: (
      <div className="flex flex-col gap-4 py-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Display name</Label>
          <Input id="name" defaultValue="Stiaan Wolfaardt" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Input id="bio" defaultValue="Founder · Cape Town" />
        </div>
      </div>
    ),
  },
}

export const Destructive: Story = {
  name: 'Destructive Confirm',
  args: {
    className: 'max-w-sm',
    trigger: <Button variant="destructive">Delete account</Button>,
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove all your data.',
    footer: (
      <>
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete account</Button>
      </>
    ),
  },
}

export const Informational: Story = {
  args: {
    trigger: <Button variant="outline">Keyboard shortcuts</Button>,
    title: 'Keyboard Shortcuts',
    description: 'Common shortcuts to speed up your workflow.',
    children: (
      <div className="flex flex-col gap-2 py-2 text-sm">
        {[
          ['⌘K', 'Open command palette'],
          ['⌘/', 'Toggle sidebar'],
          ['⌘S', 'Save'],
          ['⌘Z', 'Undo'],
        ].map(([key, desc]) => (
          <div
            key={key}
            className="flex items-center justify-between border-b border-border py-1.5 last:border-0"
          >
            <span className="text-muted-foreground">{desc}</span>
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-xs">{key}</kbd>
          </div>
        ))}
      </div>
    ),
  },
}
