import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'
import { Heading } from '../heading'

const meta = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
    variant: { control: 'select', options: ['default', 'muted', 'subtle', 'lead'] },
    weight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    children: { control: 'text' },
  },
  args: {
    children: 'The wabi-sabi aesthetic embraces imperfection as the essence of beauty.',
    size: 'base',
    variant: 'default',
    weight: 'normal',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 max-w-lg">
      <Text variant="default">Default — primary body copy for readable content.</Text>
      <Text variant="muted">Muted — secondary supporting information.</Text>
      <Text variant="subtle">Subtle — metadata, timestamps, low-priority notes.</Text>
      <Text variant="lead">
        Lead — introductory paragraph that sets context with a slightly larger size.
      </Text>
    </div>
  ),
}

export const TypographicScale: Story = {
  name: 'Size Scale',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      {(['xs', 'sm', 'base', 'lg', 'xl'] as const).map((s) => (
        <Text key={s} size={s}>
          {s} — Sunlight filtering through maple leaves.
        </Text>
      ))}
    </div>
  ),
}

export const InContext: Story = {
  name: 'In Context (article)',
  parameters: { controls: { disable: true } },
  render: () => (
    <article className="max-w-lg flex flex-col gap-4">
      <Heading level={2}>Komorebi</Heading>
      <Text variant="lead">
        A Japanese concept describing the interplay of light and leaves as sunlight filters through
        a forest canopy.
      </Text>
      <Text>
        The word embodies a distinctly Japanese aesthetic sensibility — an appreciation for
        ephemeral beauty found in the natural world. It cannot be directly translated, which gives
        it a poetic weight that carries meaning beyond its definition.
      </Text>
      <Text variant="muted" size="sm">
        Published May 2026 · 3 min read
      </Text>
    </article>
  ),
}
