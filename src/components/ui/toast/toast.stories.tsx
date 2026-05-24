import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Button } from '../button'
import { Toaster } from './toast'

const meta = {
  title: 'Feedback/Toast',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast notifications via Sonner. Place `<Toaster />` once at the app root, then call `toast()` from anywhere.',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster richColors position="bottom-right" />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast('Your changes have been saved.')}>
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button variant="matcha" onClick={() => toast.success('Profile updated successfully!')}>
      Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button variant="destructive" onClick={() => toast.error('Connection failed. Please retry.')}>
      Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button variant="sakura" onClick={() => toast.warning('Subscription expires in 3 days.')}>
      Warning Toast
    </Button>
  ),
}

export const WithDescription: Story = {
  name: 'With Description',
  render: () => (
    <Button
      onClick={() =>
        toast('Deployment started', {
          description: 'Your app is being deployed to production.',
        })
      }
    >
      With Description
    </Button>
  ),
}

export const WithAction: Story = {
  name: 'With Action',
  render: () => (
    <Button
      onClick={() =>
        toast('Message deleted', {
          description: 'The message has been removed from your inbox.',
          action: {
            label: 'Undo',
            onClick: () => toast.success('Message restored'),
          },
        })
      }
    >
      With Action
    </Button>
  ),
}

export const AllTypes: Story = {
  name: 'All Types',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" onClick={() => toast('Default message')}>Default</Button>
      <Button size="sm" variant="matcha" onClick={() => toast.success('All done!')}>Success</Button>
      <Button size="sm" variant="destructive" onClick={() => toast.error('Something broke')}>Error</Button>
      <Button size="sm" variant="sakura" onClick={() => toast.warning('Watch out')}>Warning</Button>
      <Button size="sm" variant="sora" onClick={() => toast.info('Good to know')}>Info</Button>
    </div>
  ),
}
