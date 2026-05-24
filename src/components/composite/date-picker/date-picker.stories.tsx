import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { DatePicker } from './date-picker'

const meta = {
  title: 'Composite/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { placeholder: 'Pick a date', disabled: false },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    return <DatePicker {...args} value={date} onChange={setDate} />
  },
}

export const WithValue: Story = {
  name: 'With Value',
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <DatePicker {...args} value={date} onChange={setDate} />
  },
}

export const Disabled: Story = {
  render: (args) => <DatePicker {...args} disabled />,
}
