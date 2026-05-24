import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Progress } from './progress'

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
  },
  args: { value: 60 },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-80" />,
}

export const Values: Story = {
  name: 'Various Values',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      {[0, 25, 50, 75, 100].map((v) => (
        <div key={v} className="flex flex-col gap-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{v}%</span>
          </div>
          <Progress value={v} />
        </div>
      ))}
    </div>
  ),
}

export const ColourVariants: Story = {
  name: 'Colour Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Progress value={70} indicatorClassName="bg-primary" />
      <Progress value={55} indicatorClassName="bg-matcha" />
      <Progress value={45} indicatorClassName="bg-sora" />
      <Progress value={80} indicatorClassName="bg-fuji" />
      <Progress value={30} indicatorClassName="bg-destructive" />
    </div>
  ),
}

export const Animated: Story = {
  name: 'Animated (live)',
  parameters: { controls: { disable: true } },
  render: () => {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
      const t = setInterval(() => setValue((v) => (v >= 100 ? 0 : v + 5)), 200)
      return () => clearInterval(t)
    }, [])
    return (
      <div className="flex flex-col gap-2 w-80">
        <div className="text-sm text-muted-foreground text-right">{value}%</div>
        <Progress value={value} />
      </div>
    )
  },
}

export const Playground: Story = {
  name: 'Playground',
  render: (args) => <Progress {...args} className="w-80" />,
}
