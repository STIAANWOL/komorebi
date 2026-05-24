import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Cloud, CreditCard, Keyboard, LogOut, Settings, User } from 'lucide-react'
import { Button } from '../button'
import { DropdownMenu } from './dropdown-menu'
import type { MenuItem } from '@/lib/types'

const meta = {
  title: 'Overlay/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven dropdown. Pass a `trigger` element and an `items` array (items, checkboxes, radio groups, labels, separators, and submenus).',
      },
    },
  },
  args: {
    trigger: <Button variant="outline">Open Menu</Button>,
    items: [],
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-56',
    items: [
      { type: 'label', label: 'My Account' },
      { type: 'separator' },
      { type: 'item', label: 'Profile', icon: <User className="h-4 w-4" />, shortcut: '⇧⌘P' },
      { type: 'item', label: 'Billing', icon: <CreditCard className="h-4 w-4" />, shortcut: '⌘B' },
      { type: 'item', label: 'Settings', icon: <Settings className="h-4 w-4" />, shortcut: '⌘S' },
      { type: 'item', label: 'Keyboard shortcuts', icon: <Keyboard className="h-4 w-4" />, shortcut: '⌘K' },
      { type: 'separator' },
      {
        type: 'submenu',
        label: 'Cloud sync',
        icon: <Cloud className="h-4 w-4" />,
        items: [
          { type: 'item', label: 'Auto-sync on' },
          { type: 'item', label: 'Manual sync' },
          { type: 'separator' },
          { type: 'item', label: 'Settings…' },
        ],
      },
      { type: 'separator' },
      { type: 'item', label: 'Sign out', icon: <LogOut className="h-4 w-4" />, shortcut: '⇧⌘Q' },
    ],
  },
}

export const WithCheckboxes: Story = {
  name: 'With Checkboxes',
  render: () => {
    const [cols, setCols] = useState({ name: true, email: true, phone: false, company: false })
    const items: MenuItem[] = [
      { type: 'label', label: 'Columns' },
      { type: 'separator' },
      ...(Object.keys(cols) as Array<keyof typeof cols>).map((key) => ({
        type: 'checkbox' as const,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        checked: cols[key],
        onCheckedChange: (checked: boolean) => setCols((c) => ({ ...c, [key]: checked })),
      })),
    ]
    return <DropdownMenu trigger={<Button variant="outline">View options</Button>} items={items} className="w-48" />
  },
}

export const WithRadio: Story = {
  name: 'With Radio Group',
  render: () => {
    const [sort, setSort] = useState('name')
    const items: MenuItem[] = [
      {
        type: 'radio-group',
        value: sort,
        onValueChange: setSort,
        options: [
          { value: 'name', label: 'Name' },
          { value: 'date', label: 'Date created' },
          { value: 'modified', label: 'Last modified' },
        ],
      },
    ]
    return <DropdownMenu trigger={<Button variant="outline">Sort by</Button>} items={items} className="w-48" />
  },
}
