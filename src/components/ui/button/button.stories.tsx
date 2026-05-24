import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import {
  ArrowRight,
  Download,
  Heart,
  Mail,
  Plus,
  Trash2,
} from 'lucide-react'
import { Button } from './button'

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Button** is the primary interactive element in Komorebi.

Variants include semantic options (\`default\`, \`secondary\`, \`outline\`, \`ghost\`, \`destructive\`, \`link\`)
and palette-direct options (\`sakura\`, \`matcha\`, \`sora\`, \`fuji\`) that draw from the Komorebi pastel palette.

Built with CVA — import \`buttonVariants\` to apply button styles without the React component.
        `.trim(),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link', 'sakura', 'matcha', 'sora', 'fuji'],
      description: 'Visual style.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Size preset.',
      table: { defaultValue: { summary: 'default' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows a spinner and disables the button.',
    },
    disabled: { control: 'boolean' },
    asChild: {
      control: false,
      description: 'Delegates rendering to the child element (Radix Slot).',
    },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    onClick: fn(),
    children: 'Button',
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'default', size: 'default' },
}

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Every variant at default size.' } },
  },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const KomorebiPalette: Story = {
  name: 'Komorebi Palette',
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Palette-direct variants using the Komorebi pastel system.' } },
  },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="sakura">Sakura</Button>
      <Button variant="matcha">Matcha</Button>
      <Button variant="sora">Sora</Button>
      <Button variant="fuji">Fuji</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
}

export const WithLeftIcon: Story = {
  name: 'With Left Icon',
  args: {
    leftIcon: <Mail className="h-4 w-4" />,
    children: 'Send Email',
  },
}

export const WithRightIcon: Story = {
  name: 'With Right Icon',
  args: {
    rightIcon: <ArrowRight className="h-4 w-4" />,
    children: 'Continue',
  },
}

export const WithBothIcons: Story = {
  name: 'With Both Icons',
  args: {
    leftIcon: <Download className="h-4 w-4" />,
    rightIcon: <ArrowRight className="h-4 w-4" />,
    children: 'Download',
  },
}

export const IconButtons: Story = {
  name: 'Icon Only',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex gap-3 items-center">
      <Button size="icon-sm" variant="outline" aria-label="Add item">
        <Plus className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="ghost" aria-label="Favourite">
        <Heart className="h-5 w-5" />
      </Button>
      <Button size="icon-lg" variant="destructive" aria-label="Delete">
        <Trash2 className="h-6 w-6" />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  args: { loading: true, children: 'Saving…' },
}

export const LoadingAllVariants: Story = {
  name: 'Loading — All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      {(['default', 'secondary', 'outline', 'ghost', 'destructive', 'sakura'] as const).map(
        (variant) => (
          <Button key={variant} variant={variant} loading>
            {variant}
          </Button>
        ),
      )}
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Unavailable' },
}

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'default',
    size: 'default',
    loading: false,
    disabled: false,
    children: 'Click me',
  },
}
