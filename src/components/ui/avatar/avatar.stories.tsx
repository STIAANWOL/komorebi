import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

const meta = {
  title: 'Primitives/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven avatar. Pass `src`/`alt` and a `fallback` (shown while loading or on error).',
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  name: 'With Image',
  args: { src: 'https://github.com/shadcn.png', alt: '@shadcn', fallback: 'SC' },
}

export const Fallback: Story = {
  name: 'Fallback (no image)',
  args: { src: '/broken-link.jpg', alt: 'User', fallback: 'TK' },
}

export const InitialsOnly: Story = {
  name: 'Initials Only',
  args: { fallback: 'SW' },
}

export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-4">
      {(['h-6 w-6', 'h-8 w-8', 'h-10 w-10', 'h-14 w-14', 'h-20 w-20'] as const).map((size) => (
        <Avatar key={size} className={size} fallback="AB" />
      ))}
    </div>
  ),
}

export const AvatarGroup: Story = {
  name: 'Avatar Group',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex -space-x-3">
      {['SW', 'MT', 'SK', 'FJ', 'AK'].map((init) => (
        <Avatar key={init} className="border-2 border-background" fallback={init} />
      ))}
    </div>
  ),
}
