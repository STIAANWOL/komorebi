import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { ConfirmDialog } from './confirm-dialog'

const meta = {
  title: 'Composite/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: { layout: 'centered', controls: { disable: true } },
  args: {
    open: false,
    onOpenChange: () => {},
    title: 'Confirm action',
    onConfirm: () => {},
  },
} satisfies Meta<typeof ConfirmDialog>

export default meta
type Story = StoryObj<typeof meta>

function ConfirmExample({ variant }: { variant?: 'default' | 'destructive' }) {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleConfirm = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setOpen(false) }, 1500)
  }

  return (
    <>
      <Button variant={variant === 'destructive' ? 'destructive' : 'outline'} onClick={() => setOpen(true)}>
        {variant === 'destructive' ? 'Delete item' : 'Open Confirm Dialog'}
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title={variant === 'destructive' ? 'Delete this item?' : 'Confirm action'}
        description={
          variant === 'destructive'
            ? 'This action cannot be undone. The item will be permanently removed.'
            : 'Are you sure you want to proceed with this action?'
        }
        confirmLabel={variant === 'destructive' ? 'Delete' : 'Confirm'}
        variant={variant}
        onConfirm={handleConfirm}
        loading={loading}
      />
    </>
  )
}

export const Default: Story = {
  render: () => <ConfirmExample />,
}

export const Destructive: Story = {
  render: () => <ConfirmExample variant="destructive" />,
}
