import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../separator'
import { ScrollArea } from './scroll-area'

const tags = Array.from({ length: 50 }).map((_, i, a) => `Tag ${a.length - i}`)

const meta = {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="font-serif text-sm font-medium mb-4">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm py-2">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex gap-3 p-4">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-28 h-20 rounded-lg bg-kiri flex items-center justify-center text-sm text-muted-foreground"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
