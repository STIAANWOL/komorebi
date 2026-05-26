import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'

const meta = {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Link** is a semantic anchor (\`<a>\`) styled as a text link, for external, anchor, and
non-routed links.

External links (an \`http(s)\` href, or \`external\`) automatically get \`target="_blank"\`,
\`rel="noopener noreferrer"\`, and a trailing ↗ icon.

To make a link **look like a button**, wrap it with \`<Button asChild>\` — the Button's styling
wins, so it renders as a button while staying a real \`<a>\`. For framework client-side routing
(e.g. Next.js \`<Link>\`), pass that as the child via \`asChild\`.
        `.trim(),
      },
    },
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['default', 'muted', 'subtle'],
      description: 'Text-link colour.',
      table: { defaultValue: { summary: 'default' } },
    },
    external: { control: 'boolean' },
    showExternalIcon: { control: 'boolean' },
    asChild: { control: false },
    children: { control: 'text' },
  },
  args: {
    href: '#',
    children: 'Pricing',
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tones: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3">
      <Link href="#" tone="default">
        Default tone
      </Link>
      <Link href="#" tone="muted">
        Muted tone
      </Link>
      <Link href="#" tone="subtle">
        Subtle tone (underline on hover)
      </Link>
    </div>
  ),
}

export const External: Story = {
  name: 'External (auto target/rel + icon)',
  args: {
    href: 'https://example.com',
    children: 'Documentation',
  },
}

export const InParagraph: Story = {
  name: 'In Running Text',
  parameters: { controls: { disable: true } },
  render: () => (
    <p className="max-w-md text-sm text-foreground">
      Komorebi is a pastel component library. Read the <Link href="#docs">documentation</Link> or
      browse the <Link href="https://example.com">source on GitHub</Link> to get started.
    </p>
  ),
}
