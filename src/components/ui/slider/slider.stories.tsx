import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Slider } from './slider'

const meta = {
  title: 'Primitives/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    disabled: { control: 'boolean' },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    step: { control: { type: 'number', min: 1 } },
  },
  args: { min: 0, max: 100, step: 1, disabled: false, defaultValue: [40] },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Slider {...args} className="w-72" />,
}

export const WithValue: Story = {
  name: 'With Value Display',
  render: (args) => {
    const [value, setValue] = React.useState([40])
    return (
      <div className="flex flex-col gap-3 w-72">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Volume</span>
          <span>{value[0]}%</span>
        </div>
        <Slider {...args} value={value} onValueChange={setValue} />
      </div>
    )
  },
}

export const Range: Story = {
  name: 'Range (two thumbs)',
  render: (args) => {
    const [value, setValue] = React.useState([20, 80])
    return (
      <div className="flex flex-col gap-3 w-72">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{value[0]}</span>
          <span>Price range</span>
          <span>{value[1]}</span>
        </div>
        <Slider {...args} value={value} onValueChange={setValue} />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: (args) => <Slider {...args} className="w-72" disabled />,
}

export const Stepped: Story = {
  name: 'Stepped (step=10)',
  render: (args) => <Slider {...args} step={10} className="w-72" />,
}
