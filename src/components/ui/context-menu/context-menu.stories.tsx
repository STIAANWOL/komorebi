import type { Meta, StoryObj } from '@storybook/react'
import { ContextMenu } from './context-menu'

const meta = {
  title: 'Overlay/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Right-click (or long-press) the children to open. Pass an `items` array — same shape as DropdownMenu.',
      },
    },
  },
  args: {
    items: [],
    children: (
      <div className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed border-input text-sm text-muted-foreground">
        Right-click here
      </div>
    ),
  },
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'w-48',
    items: [
      { type: 'label', label: 'File' },
      { type: 'separator' },
      { type: 'item', label: 'Open', shortcut: '⌘O' },
      { type: 'item', label: 'Save', shortcut: '⌘S' },
      { type: 'item', label: 'Save as…', shortcut: '⇧⌘S' },
      { type: 'separator' },
      { type: 'item', label: 'Delete', shortcut: '⌫' },
    ],
  },
}
