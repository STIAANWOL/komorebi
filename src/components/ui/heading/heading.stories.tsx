import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './heading'

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'All headings use **Shippori Mincho** — an authentic Japanese serif. Levels map to h1–h6 with curated size scales.',
      },
    },
  },
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    muted: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'The beauty of imperfection', level: 2, muted: false },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllLevels: Story = {
  name: 'All Levels',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      <Heading level={1}>H1 — Wabi-sabi beauty</Heading>
      <Heading level={2}>H2 — Komorebi light</Heading>
      <Heading level={3}>H3 — Stillness in motion</Heading>
      <Heading level={4}>H4 — Form follows feeling</Heading>
      <Heading level={5}>H5 — Deliberate simplicity</Heading>
      <Heading level={6}>H6 — The essential detail</Heading>
    </div>
  ),
}

export const Muted: Story = {
  args: { muted: true, level: 3, children: 'Muted heading — secondary context' },
}

export const Playground: Story = {
  name: 'Playground',
  args: { children: 'Playground heading', level: 2, muted: false },
}
