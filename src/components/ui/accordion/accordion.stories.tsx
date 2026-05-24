import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './accordion'

const faqs = [
  {
    q: 'What is Komorebi?',
    a: "Komorebi (木漏れ日) is a Japanese word describing the interplay of light and leaves — the dappled sunlight that filters through a forest canopy. It inspired this design system's approach to softness and depth.",
  },
  {
    q: 'Which fonts does the library use?',
    a: 'Headings use Shippori Mincho (Japanese-inspired serif), body copy uses Jost (a clean geometric sans-serif), and code uses JetBrains Mono.',
  },
  {
    q: 'How do I set up dark mode?',
    a: 'Add the `dark` class to a wrapper element. Pair with next-themes or any theme provider for automatic system preference detection.',
  },
  {
    q: 'Do I need Tailwind to use the components?',
    a: 'No — komorebi ships a self-contained stylesheet. Import it once and the components are styled, no Tailwind setup required.',
  },
]

const items = faqs.map((faq, i) => ({ value: `item-${i}`, title: faq.q, content: faq.a }))

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A prop-driven accordion. Pass an `items` array of `{ value, title, content }`.',
      },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: 'single', collapsible: true, items, className: 'w-[480px]' },
}

export const MultipleOpen: Story = {
  name: 'Multiple Open',
  args: { type: 'multiple', items: items.slice(0, 3), className: 'w-[480px]' },
}

export const DefaultOpen: Story = {
  name: 'Default Open',
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-0',
    items,
    className: 'w-[480px]',
  },
}
