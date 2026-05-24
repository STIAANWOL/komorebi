import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { Button } from '../button'
import { Command } from './command'
import type { CommandGroupData } from './command'

const groups: CommandGroupData[] = [
  {
    heading: 'Suggestions',
    items: [
      { label: 'Calendar', icon: <Calendar className="h-4 w-4" /> },
      { label: 'Search Emoji', icon: <Smile className="h-4 w-4" /> },
    ],
  },
  {
    heading: 'Settings',
    items: [
      { label: 'Profile', icon: <User className="h-4 w-4" />, shortcut: '⌘P' },
      { label: 'Billing', icon: <CreditCard className="h-4 w-4" />, shortcut: '⌘B' },
      { label: 'Settings', icon: <Settings className="h-4 w-4" />, shortcut: '⌘S' },
    ],
  },
]

const meta = {
  title: 'Overlay/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven command palette. Pass `groups` of items; add `open`/`onOpenChange` for a ⌘K dialog.',
      },
    },
  },
  args: { groups },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Inline: Story = {
  name: 'Inline Command',
  args: { groups, placeholder: 'Type a command or search…', className: 'w-80' },
}

export const DialogMode: Story = {
  name: 'Dialog (⌘K)',
  render: () => {
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((o) => !o)
        }
      }
      document.addEventListener('keydown', handler)
      return () => document.removeEventListener('keydown', handler)
    }, [])
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Palette
          <kbd className="ml-2 font-mono text-xs opacity-60">⌘K</kbd>
        </Button>
        <Command
          open={open}
          onOpenChange={setOpen}
          placeholder="Type a command or search…"
          groups={[
            {
              heading: 'Pages',
              items: [
                { label: 'Dashboard', onSelect: () => setOpen(false) },
                { label: 'Projects', onSelect: () => setOpen(false) },
                { label: 'Team', onSelect: () => setOpen(false) },
              ],
            },
            {
              heading: 'Actions',
              items: [
                { label: 'Settings', icon: <Settings className="h-4 w-4" />, shortcut: '⌘S' },
                { label: 'Profile', icon: <User className="h-4 w-4" />, shortcut: '⌘P' },
              ],
            },
          ]}
        />
      </>
    )
  },
}
