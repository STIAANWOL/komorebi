import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
}

export const CardSkeleton: Story = {
  name: 'Card Skeleton',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 w-72 p-5 rounded-xl border border-border">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  ),
}

export const ProfileSkeleton: Story = {
  name: 'Profile Skeleton',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex items-center gap-4 w-80">
      <Skeleton className="h-14 w-14 rounded-full shrink-0" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  ),
}

export const TableSkeleton: Story = {
  name: 'Table Skeleton',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-2 w-96">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-4 items-center py-2 border-b border-border last:border-0">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-5 w-14 rounded-full ml-auto" />
        </div>
      ))}
    </div>
  ),
}
