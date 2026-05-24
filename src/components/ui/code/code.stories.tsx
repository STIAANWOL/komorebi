import type { Meta, StoryObj } from '@storybook/react'
import { Code, CodeBlock } from './code'
import { Text } from '../text'

const meta = {
  title: 'Typography/Code',
  component: Code,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const InlineCode: Story = {
  name: 'Inline Code',
  render: () => (
    <Text>
      Use the <Code>cn()</Code> helper to merge Tailwind classes safely. Import from{' '}
      <Code>@/lib/utils</Code>.
    </Text>
  ),
}

export const CodeBlockStory: Story = {
  name: 'Code Block',
  render: () => (
    <CodeBlock className="w-[480px]">
      {`import { Button } from '@/components/ui/button'

export function Example() {
  return (
    <Button variant="sakura" leftIcon={<Cherry />}>
      Blossom
    </Button>
  )
}`}
    </CodeBlock>
  ),
}

export const InArticle: Story = {
  name: 'In Article Context',
  render: () => (
    <div className="max-w-lg flex flex-col gap-4">
      <Text>
        The <Code>cn()</Code> utility combines <Code>clsx</Code> with <Code>tailwind-merge</Code>, ensuring conflicting Tailwind utilities resolve correctly:
      </Text>
      <CodeBlock>
        {`function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}`}
      </CodeBlock>
      <Text variant="muted" size="sm">
        This pattern is used throughout the library to allow consumers to safely override default styles.
      </Text>
    </div>
  ),
}
