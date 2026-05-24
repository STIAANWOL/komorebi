import type { Meta, StoryObj } from '@storybook/react'
import { Settings } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import { Popover } from './popover'

const meta = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven popover. Pass a `trigger` element; the floating content is `children`.',
      },
    },
  },
  args: { trigger: null },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Popover</Button>,
    children: (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-serif text-sm font-semibold">Dimensions</p>
          <p className="text-xs text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="height">Max height</Label>
            <Input id="height" defaultValue="25px" />
          </div>
        </div>
      </div>
    ),
  },
}

export const WithIconTrigger: Story = {
  name: 'With Icon Trigger',
  args: {
    className: 'w-56',
    trigger: (
      <Button size="icon" variant="ghost" aria-label="Settings">
        <Settings className="h-5 w-5" />
      </Button>
    ),
    children: (
      <div className="flex flex-col gap-1">
        {['Profile', 'Billing', 'Team', 'Sign out'].map((item) => (
          <button
            key={item}
            className="rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent"
          >
            {item}
          </button>
        ))}
      </div>
    ),
  },
}

export const Alignments: Story = {
  name: 'Alignment Options',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-3">
      {(['start', 'center', 'end'] as const).map((align) => (
        <Popover
          key={align}
          align={align}
          className="w-40"
          trigger={
            <Button variant="outline" size="sm">
              {align}
            </Button>
          }
        >
          <p className="text-sm">Aligned {align}</p>
        </Popover>
      ))}
    </div>
  ),
}
