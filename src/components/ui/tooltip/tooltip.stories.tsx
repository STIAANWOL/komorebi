import type { Meta, StoryObj } from '@storybook/react'
import { Copy, Heart, Info, Trash2 } from 'lucide-react'
import { Button } from '../button'
import { Tooltip } from './tooltip'

const meta = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven tooltip. Wrap the target as children and pass `content`. The provider is included internally.',
      },
    },
  },
  args: { content: '', children: null },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'Add to favourites',
    children: <Button variant="outline">Hover me</Button>,
  },
}

export const Sides: Story = {
  name: 'All Sides',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="grid grid-cols-3 gap-10 p-10">
      <div />
      <Tooltip side="top" content="Tooltip on top">
        <Button size="sm" variant="outline">
          Top
        </Button>
      </Tooltip>
      <div />
      <Tooltip side="left" content="Tooltip on left">
        <Button size="sm" variant="outline">
          Left
        </Button>
      </Tooltip>
      <div />
      <Tooltip side="right" content="Tooltip on right">
        <Button size="sm" variant="outline">
          Right
        </Button>
      </Tooltip>
      <div />
      <Tooltip side="bottom" content="Tooltip on bottom">
        <Button size="sm" variant="outline">
          Bottom
        </Button>
      </Tooltip>
      <div />
    </div>
  ),
}

export const IconToolbar: Story = {
  name: 'Icon Toolbar with Tooltips',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-1 rounded-lg border p-1">
      {[
        { icon: <Copy className="h-4 w-4" />, label: 'Copy' },
        { icon: <Heart className="h-4 w-4" />, label: 'Favourite' },
        { icon: <Info className="h-4 w-4" />, label: 'More info' },
        { icon: <Trash2 className="h-4 w-4" />, label: 'Delete' },
      ].map(({ icon, label }) => (
        <Tooltip key={label} content={label}>
          <Button size="icon" variant="ghost" aria-label={label}>
            {icon}
          </Button>
        </Tooltip>
      ))}
    </div>
  ),
}
