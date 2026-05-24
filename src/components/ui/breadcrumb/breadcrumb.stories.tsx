import type { Meta, StoryObj } from '@storybook/react'
import { Slash } from 'lucide-react'
import { Breadcrumb } from './breadcrumb'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A prop-driven breadcrumb. Pass an `items` array; the last item (or one with no `href`) renders as the current page.',
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Komorebi UI' },
    ],
  },
}

export const WithEllipsis: Story = {
  name: 'With Ellipsis',
  args: {
    items: [
      { label: 'Home', href: '#' },
      { ellipsis: true },
      { label: 'Components', href: '#' },
      { label: 'Breadcrumb' },
    ],
  },
}

export const CustomSeparator: Story = {
  name: 'Custom Separator',
  args: {
    separator: <Slash />,
    items: [{ label: 'Home', href: '#' }, { label: 'Settings', href: '#' }, { label: 'Profile' }],
  },
}
