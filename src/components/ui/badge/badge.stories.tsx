import type { Meta, StoryObj } from '@storybook/react'
import { Circle } from 'lucide-react'
import { Badge } from './badge'

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
        'sakura',
        'fuji',
      ],
      table: { defaultValue: { summary: 'default' } },
    },
    children: { control: 'text' },
  },
  args: { children: 'Badge', variant: 'default' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="sakura">Sakura</Badge>
      <Badge variant="fuji">Fuji</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  name: 'With Status Dot',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">
        <Circle className="h-2 w-2 fill-current" />
        Online
      </Badge>
      <Badge variant="warning">
        <Circle className="h-2 w-2 fill-current" />
        Away
      </Badge>
      <Badge variant="destructive">
        <Circle className="h-2 w-2 fill-current" />
        Offline
      </Badge>
    </div>
  ),
}

export const StatusLabels: Story = {
  name: 'Status Labels',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="info">Beta</Badge>
      <Badge variant="warning">Deprecated</Badge>
      <Badge variant="destructive">Breaking</Badge>
      <Badge variant="success">Stable</Badge>
      <Badge variant="outline">v2.0</Badge>
    </div>
  ),
}
